import { bit } from '../custom-types';
import { CPU } from './cpu';

// tslint:disable:no-bitwise
export class RegisterHelper {

    readonly ZF: number = 0;
    readonly N: number = 1;
    readonly H: number = 2;
    readonly CY: number = 3;

    constructor(private cpu: CPU) {}

    // Flags
    setZF(value: bit) {
        this.cpu.af = this.setBit(this.cpu.af, this.ZF, value);
    }

    readZF(): bit {
        return this.readBit(this.cpu.af, this.ZF);
    }

    setN(value: bit) {
        this.cpu.af = this.setBit(this.cpu.af, this.N, value);
    }

    readN(): bit {
        return this.readBit(this.cpu.af, this.N);
    }

    setH(value: bit) {
        this.cpu.af = this.setBit(this.cpu.af, this.H, value);
    }

    readH(): bit {
        return this.readBit(this.cpu.af, this.H);
    }

    setCY(value: bit) {
        this.cpu.af = this.setBit(this.cpu.af, this.CY, value);
    }

    readCY(): bit {
        return this.readBit(this.cpu.af, this.CY);
    }

    // registers
    setA(value: number) {
        this.cpu.af = this.setHigherByte(this.cpu.af, value);
    }

    getA(): number {
        return this.getHigherByte(this.cpu.af);
    }

    getB(): number {
        return this.getHigherByte(this.cpu.bc);
    }

    getC(): number {
        return this.getLowerByte(this.cpu.bc);
    }

    getD(): number {
        return this.getHigherByte(this.cpu.de);
    }

    getE(): number {
        return this.getLowerByte(this.cpu.de);
    }

    getF(): number {
        return this.getLowerByte(this.cpu.af);
    }

    // INC
    incrementPC(bytes: number = 1) {
        this.cpu.pc += bytes;
        if (this.cpu.pc > 0xFFFF) {
            this.cpu.pc = 0;
        }
    }
    incrementBC() {
        this.cpu.bc ++;
        if (this.cpu.bc > 0xFFFF) {
            this.cpu.bc = 0;
        }
    }
    incrementSP() {
        this.cpu.sp ++;
        if (this.cpu.sp > 0xFFFF) {
            this.cpu.sp = 0;
        }
    }
    incrementHL() {
        this.cpu.hl ++;
        if (this.cpu.hl > 0xFFFF) {
            this.cpu.hl = 0;
        }
    }
    incrementDE() {
        this.cpu.de ++;
        if (this.cpu.de > 0xFFFF) {
            this.cpu.de = 0;
        }
    }

    incrementA() {
       const A = this.getA() + 1;
       if (A > 0xFF) {
           this.setA(0);
       } else {
           this.setA(A);
       }
    }


    // DEC
    decrementBC() {
        this.cpu.bc--;
        if (this.cpu.bc < 0) {
            this.cpu.bc = 0xFFFF;
        }
    }
    decrementSP() {
        this.cpu.sp--;
        if (this.cpu.sp < 0) {
            this.cpu.sp = 0xFFFF;
        }
    }
    decrementHL() {
        this.cpu.hl--;
        if (this.cpu.hl < 0) {
            this.cpu.hl = 0xFFFF;
        }
    }
    decrementDE() {
        this.cpu.de--;
        if (this.cpu.de < 0) {
            this.cpu.de = 0xFFFF;
        }
    }

    decrementA() {
        const A = this.getA() - 1;
        if (A < 0x00) {
            this.setA(0xFF);
        } else {
            this.setA(A);
        }
     }

    setPC(address: number) {
        this.cpu.pc = address;
    }

    // Helper functions
    setLowerByte(register: number, value: number): number {
        const mask = 0b0000_0000_1111_1111;
        return (register & ~mask) | (value & mask);
    }

    setHigherByte(register: number, value: number): number {
        value = value << 8;
        const mask = 0b1111_1111_0000_0000;
        return (register & ~mask) | (value & mask);
    }

    getLowerByte(register: number): number {
        const mask = 0b0000_0000_1111_1111;
        return register & mask;
    }

    getHigherByte(register: number): number {
        return register >> 8;
    }

    readBit(register: number, position: number): bit {
        return ((register >> position) & 0b1) as bit;
    }

    setBit(register: number, position: number, b: bit): number {
        const mask = ~(1 << position);
        return (b << position) | (mask & register);
    }
}

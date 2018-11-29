import { Memory } from './memory';
import { Opcode, OpCodes, OpcodeMeta } from '../custom-types';
import { RegisterHelper } from './register-helper';

interface OpcodeParam {
    parameters: Array<number>;
    pcInc: number;
    cycles: number;
}

// tslint:disable:no-bitwise
// tslint:disable:max-line-length
export class OpCodeFetcher {

    private opcodeMetas: Array<OpcodeMeta> = [];
    // FETCHER
    constructor(private memory: Memory) {
       const o = this.makeOpcodeMeta;
       const op = OpCodes;
       const _this = this;

       function LD_N_with_NNREG(p: OpcodeParam, registerValue: number, reg: RegisterHelper): number {
            const destinationAddress = p.parameters[0];
            memory.setValueAtAdress(destinationAddress, registerValue);
            reg.incrementPC(p.pcInc);
            return p.cycles;
        }

        function LD_NNREG_with_NN(p: OpcodeParam, store: (valueToStore: number) => void, reg: RegisterHelper): number {
            const lsb = p.parameters[0];
            const msb = p.parameters[1];
            const val = _this.toLittleEndianByte(lsb, msb);
            store(val);
            reg.incrementPC(p.pcInc);
            return p.cycles;
        }

       this.opcodeMetas =  [

            o(op.NOP,  0, 4, 'NOP', 'Does nothing',
            (p: OpcodeParam, registerHelper: RegisterHelper) => {
                registerHelper.incrementPC(p.pcInc);
                return p.cycles;
            }),

            // INC
            o(op.INCA, 0, 4, 'INC A', 'Increments A, Z is set if result is zero. N is reset. H is set if carry from bit 3. C is Not affected',
            (p: OpcodeParam, registerHelper: RegisterHelper) => {
                registerHelper.incrementA();
                const A = registerHelper.getA();
                if (A === 0) {
                    registerHelper.setZF(1);
                }
                registerHelper.setN(0);
                if (registerHelper.CY === 1) {
                    registerHelper.setH(1);
                }
                registerHelper.incrementPC(p.pcInc);
                return p.cycles;
            }),
            o(op.INCC, 0, 4, 'INC C', 'Increments C, Z is set if result is zero. N is reset. H is set if carry from bit 3. C is Not affected',
            (p: OpcodeParam, registerHelper: RegisterHelper) => {
                registerHelper.incrementC();
                registerHelper.incrementPC(p.pcInc);
                return p.cycles;
            }),
            o(op.DECA, 0, 4, 'DEC A', 'Decrements A',
            (p: OpcodeParam, registerHelper: RegisterHelper) => {
                registerHelper.decrementA();
                registerHelper.incrementPC(p.pcInc);
                return p.cycles;
            }),
            o(op.INCBC, 0, 8, 'INC BC', 'Increments BC',
            (p: OpcodeParam, registerHelper: RegisterHelper) => {
                registerHelper.incrementBC();
                registerHelper.incrementPC(p.pcInc);
                return p.cycles;
            }),
            o(op.INCDE, 0, 8, 'INC DE', 'Increments DE',
            (p: OpcodeParam, registerHelper: RegisterHelper) => {
                registerHelper.incrementDE();
                registerHelper.incrementPC(p.pcInc);
                return p.cycles;
            }),
            o(op.INCHL, 0, 8, 'INC HL', 'Increments HL',
            (p: OpcodeParam, registerHelper: RegisterHelper) => {
                registerHelper.incrementHL();
                registerHelper.incrementPC(p.pcInc);
                return p.cycles;
            }),
            o(op.INCSP, 0, 8, 'INC SP', 'Increment the Stack Pointer',
            (p: OpcodeParam, registerHelper: RegisterHelper) => {
                registerHelper.incrementSP();
                registerHelper.incrementPC(p.pcInc);
                return p.cycles;
            }),

            // DEC
            o(op.DECBC, 0, 8, 'DEC BC', 'Decrements BC',
            (p: OpcodeParam, registerHelper: RegisterHelper) => {
                registerHelper.decrementBC();
                registerHelper.incrementPC(p.pcInc);
                return p.cycles;
            }),
            o(op.DECDE, 0, 8, 'DEC DE', 'Decrements DE',
            (p: OpcodeParam, registerHelper: RegisterHelper) => {
                registerHelper.decrementDE();
                registerHelper.incrementPC(p.pcInc);
                return p.cycles;
            }),
            o(op.DECHL, 0, 8, 'DEC HL', 'Decrements HL',
            (p: OpcodeParam, registerHelper: RegisterHelper) => {
                registerHelper.decrementHL();
                registerHelper.incrementPC(p.pcInc);
                return p.cycles;
            }),
            o(op.DECSP, 0, 8, 'DEC SP', 'Decrements the Stack Pointer',
            (p: OpcodeParam, registerHelper: RegisterHelper) => {
                registerHelper.decrementSP();
                registerHelper.incrementPC(p.pcInc);
                return p.cycles;
            }),

            // JP
            o(op.JPNN, 2, 12, 'JP 0x${1}${0}', 'Jumps to a NN',
            (p: OpcodeParam, registerHelper: RegisterHelper) => {
                const lsb = p.parameters[0];
                const msb = p.parameters[1];
                registerHelper.setPC(this.toLittleEndianByte(lsb, msb));
                return p.cycles;
            }),
            o(op.JPNZNN, 2, 12, 'JP NZ, 0x${1}${0}', 'Jumps to NN if Z is not set',
            (p: OpcodeParam, registerHelper: RegisterHelper) => {
                const lsb = p.parameters[0];
                const msb = p.parameters[1];
                if (registerHelper.readZF() === 0b0) {
                    registerHelper.setPC(this.toLittleEndianByte(lsb, msb));
                } else {
                    registerHelper.incrementPC(p.pcInc);
                }
                return p.cycles;
            }),
            o(op.JPZNN, 2, 12, 'JP Z, 0x${1}${0}', 'Jumps to NN if Z is set',
            (p: OpcodeParam, registerHelper: RegisterHelper) => {
                const lsb = p.parameters[0];
                const msb = p.parameters[1];
                if (registerHelper.readZF() === 0b1) {
                    registerHelper.setPC(this.toLittleEndianByte(lsb, msb));
                } else {
                    registerHelper.incrementPC(p.pcInc);
                }
                return p.cycles;
            }),
            o(op.JPNCNN, 2, 12, 'JP NC, 0x${1}${0}', 'Jumps to NN if C is not set',
            (p: OpcodeParam, registerHelper: RegisterHelper) => {
                const lsb = p.parameters[0];
                const msb = p.parameters[1];
                if (registerHelper.readCY() === 0b0) {
                    registerHelper.setPC(this.toLittleEndianByte(lsb, msb));
                } else {
                    registerHelper.incrementPC(p.pcInc);
                }
                return p.cycles;
            }),
            o(op.JPCNN, 2, 12, 'JP C, 0x${1}${0}', 'Jumps to NN if C is set',
            (p: OpcodeParam, registerHelper: RegisterHelper) => {
                const lsb = p.parameters[0];
                const msb = p.parameters[1];
                if (registerHelper.readCY() === 0b1) {
                    registerHelper.setPC(this.toLittleEndianByte(lsb, msb));
                } else {
                    registerHelper.incrementPC(p.pcInc);
                }
                return p.cycles;
            }),

            // JR
            o(op.JRZN, 1, 8, 'JR Z, 0x${0}', 'Jumps to N if Z is set',
            (p: OpcodeParam, registerHelper: RegisterHelper) => {
                const destinationAddress = p.parameters[0];
                if (registerHelper.readZF() === 0b1) {
                    registerHelper.setPC(destinationAddress);
                } else {
                    registerHelper.incrementPC(p.pcInc);
                }
                return p.cycles;
            }),
            o(op.JRNZN, 1, 8, 'JR NZ, 0x${0}', 'Jumps to N if Z is not set',
            (p: OpcodeParam, registerHelper: RegisterHelper) => {
                const destinationAddress = p.parameters[0];
                if (registerHelper.readZF() === 0b0) {
                    registerHelper.setPC(destinationAddress);
                } else {
                    registerHelper.incrementPC(p.pcInc);
                }
                return p.cycles;
            }),

            // LD
            o(op.LDAN, 1, 8, 'LD A, 0x${0}', 'Put immediate 8 bit n into A',
            (p: OpcodeParam, registerHelper: RegisterHelper) => {
                const valueAddress = p.parameters[0];
                registerHelper.setA(valueAddress);
                registerHelper.incrementPC(p.pcInc);
                return p.cycles;
            }),
            o(op.LDBN, 1, 8, 'LD B, 0x${0}', 'Put value of register B into immediate 8 bit n',
            (p: OpcodeParam, registerHelper: RegisterHelper) => {
                return LD_N_with_NNREG(p, registerHelper.getB(), registerHelper);
            }),
            o(op.LDCN, 1, 8, 'LD C, 0x${0}', 'Put value of register C into immediate 8 bit n',
            (p: OpcodeParam, registerHelper: RegisterHelper) => {
                return LD_N_with_NNREG(p, registerHelper.getC(), registerHelper);
            }),
            o(op.LD_OFFSET_FF_CA, 0, 8, 'LD [0xFF + C], A', 'Put A into address $FF00 + register C',
            (p: OpcodeParam, registerHelper: RegisterHelper) => {
                const A = registerHelper.getA();
                const C = registerHelper.getC();
                memory.setValueAtAdress(0xFF + C, A);
                registerHelper.incrementPC(p.pcInc);
                return p.cycles;
            }),
            o(op.LDSPNN, 2, 12, 'LD SP, 0x${1}${0}', 'Loads a 16 bit immediate value into SP',
            (p: OpcodeParam, registerHelper: RegisterHelper) => {
                return LD_NNREG_with_NN(p, (val) => registerHelper.setSP(val), registerHelper);
             }),
            o(op.LDHLNN, 2, 12, 'LD HL, 0x${1}${0}', 'Loads a 16 bit immediate value into HL',
            (p: OpcodeParam, registerHelper: RegisterHelper) => {
                return LD_NNREG_with_NN(p, (val) => registerHelper.setHL(val), registerHelper);
            }),
            o(op.LDDHLA, 0, 8, 'LDD [HL], A', 'Put A into memory address HL. Decrement HL. Same as: LD (HL),A - DEC HL',
            (p: OpcodeParam, registerHelper: RegisterHelper) => {
                const A = registerHelper.getA();
                const HLAddr = registerHelper.getHL();
                memory.setValueAtAdress(HLAddr, A);
                registerHelper.decrementHL();
                registerHelper.incrementPC(p.pcInc);
                return p.cycles;
            }),

            // CP
            o(op.CPA, 1, 8, 'CP A, 0x${0}', 'Compares an immediate 8 bit value with register A. TODO talk about C Z N etc..',
            (p: OpcodeParam, registerHelper: RegisterHelper) => {
                const comparaisonValue = p.parameters[0];
                const A = registerHelper.getA();
                const result = A - comparaisonValue;
                registerHelper.setN(1);
                if (result === 0) {
                   registerHelper.setZF(1);
                } else {
                    registerHelper.setZF(0);
                }
                registerHelper.incrementPC(p.pcInc);
                return p.cycles;
            }),

            // BITOPS
            o(op.XORA, 0, 4, 'XOR A', 'Logical exclusive OR n with register A, result in A. Z is set if result is 0. N, H & C are reset.',
            (p: OpcodeParam, registerHelper: RegisterHelper) => {
                let A  = registerHelper.getA();
                A = A ^ A;
                registerHelper.setA(A);
                if (A === 0) {
                    registerHelper.setZF(1);
                }
                registerHelper.setCY(0);
                registerHelper.setN(0);
                registerHelper.setH(0);
                registerHelper.incrementPC(p.pcInc);
                return p.cycles;
            }),

            // PREFIX opcodes
            o(op.BITBH, 0, 8, 'BIT 7,H', 'Test bit b in register H. Z is set if bit b of register H is 0. N is reset. H is set. C is not affected.',
            (p: OpcodeParam, registerHelper: RegisterHelper) => {
                const H = registerHelper.readBit(registerHelper.getH(), 7);
                if (H === 0) {
                    registerHelper.setZF(1);
                }
                registerHelper.setN(0);
                registerHelper.setH(1);
                registerHelper.incrementPC(p.pcInc);
                return p.cycles;
            })
        ];
    }

    fetchOpcode(address: number): Opcode {
        try {
            const opcode = this.fetchOpcodeValue(address);
            const opcodeMeta: OpcodeMeta = this.opcodeMetas.find((meta) => meta.code === opcode);
            return new Opcode(opcode, this.buildParameters(address, opcodeMeta),
                              opcodeMeta.pcInc, opcodeMeta.cycles,
                              opcodeMeta.opcodeBytes, opcodeMeta.template);
        } catch (any) {
            return new Opcode(0, [], 0, 0, 0, 'UNKNOWN');
        }
    }

    executeOpCode(opcode: Opcode, registerHelper: RegisterHelper): number {
        return this.opcodeMetas
            .find((om) => om.code === opcode.opcode)
            .execute({parameters: opcode.parameters, pcInc: opcode.pcInc, cycles: opcode.cycles}, registerHelper);
    }

    getOpcodes(): Array<OpcodeMeta> {
        return this.opcodeMetas;
    }

    private makeOpcodeMeta(code: OpCodes, params: number, cycles: number, template: string, doc: string, execute: (OpcodeParam, RegisterHelper) => number) {
        const isPrefix = code.toString(16).includes(OpCodes.PREFIX.toString(16));
        const bytes = isPrefix ? 2 : 1;
        const pcInc = params + bytes;
        return {code, name: template, params, pcInc, cycles, template, doc, opcodeBytes: bytes, execute};
    }

    private buildParameters(initialPC: number, opcodeMeta: OpcodeMeta): Array<number> {
        const parameters = new Array<number>();
        for (let i = 0; i < opcodeMeta.params; i++) {
            parameters.push(this.memory.getValueAtAdress(initialPC + (i + opcodeMeta.opcodeBytes)));
        }
        return parameters;
    }

    private fetchOpcodeValue(address: number): number {
        const prefixOpcode = OpCodes.PREFIX;
        let opcode = this.memory.getValueAtAdress(address);
        if (opcode === prefixOpcode) {
            address++;
            opcode = Number.parseInt(opcode.toString(16) + this.memory.getValueAtAdress(address).toString(16), 16);
        }
        return opcode;
    }

    private toLittleEndianByte(lsb: number, msb: number): number {
        const addr = Number.parseInt(msb.toString(16).padStart(2, '0') + lsb.toString(16).padStart(2, '0'), 16);
        return addr;
    }
}

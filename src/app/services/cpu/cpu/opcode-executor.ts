import { RegisterHelper } from './register-helper';
import { Memory } from './memory';
import { Opcode, OpCodes } from '../custom-types';

interface OpcodeParam {
    parameters: Array<number>;
    pcInc: number;
    cycles: number;
}
export class OpCodeExecutor {

    // http://marc.rawer.de/Gameboy/Docs/GBCPUman.pdf
    private opcodeMap: Map<number, (OpcodeParam) => number> = new Map();

    private toLittleEndianByte(lsb: number, msb: number): number {
        const addr = Number.parseInt(msb.toString(16).padStart(2, '0') + lsb.toString(16).padStart(2, '0'), 16);
        return addr;
    }

    executeOpCode(opcode: Opcode): number {
        return this.opcodeMap[opcode.opcode]({parameters: opcode.parameters, pcInc: opcode.pcInc, cycles: opcode.cycles});
    }

    constructor(private registerHelper: RegisterHelper, private memory: Memory) {

        this.opcodeMap[OpCodes.NOP] = (opcodeParam: OpcodeParam) => {
            registerHelper.incrementPC(opcodeParam.pcInc);
            return opcodeParam.cycles;
        };

        // LD
        this.opcodeMap[OpCodes.LDBN] = (opcodeParam: OpcodeParam) => {
            const destinationAddress = opcodeParam.parameters[0];
            memory.setValueAtAdress(destinationAddress, registerHelper.getB());
            registerHelper.incrementPC(opcodeParam.pcInc);
            return opcodeParam.cycles;
        };
        this.opcodeMap[OpCodes.LDA] = (opcodeParam: OpcodeParam) => {
            const valueToStore = opcodeParam.parameters[0];
            registerHelper.setA(valueToStore);
            registerHelper.incrementPC(opcodeParam.pcInc);
            return opcodeParam.cycles;
        };

        // JP
        this.opcodeMap[OpCodes.JPNN] = (opcodeParam: OpcodeParam) => {
            const lsb = opcodeParam.parameters[0];
            const msb = opcodeParam.parameters[1];
            registerHelper.setPC(this.toLittleEndianByte(lsb, msb));
            return opcodeParam.cycles;
        };

        this.opcodeMap[OpCodes.JPZNN] = (opcodeParam: OpcodeParam) => {
            const lsb = opcodeParam.parameters[0];
            const msb = opcodeParam.parameters[1];
            if (registerHelper.readZF() === 0b1) {
                registerHelper.setPC(this.toLittleEndianByte(lsb, msb));
            } else {
                registerHelper.incrementPC(opcodeParam.pcInc);
            }
            return opcodeParam.cycles;
        };

        this.opcodeMap[OpCodes.JPZN] = (opcodeParam: OpcodeParam) => {
            const destinationAddress = opcodeParam.parameters[0];
            if (registerHelper.readZF() === 0b1) {
                registerHelper.setPC(destinationAddress);
            } else {
                registerHelper.incrementPC(opcodeParam.pcInc);
            }
            return opcodeParam.cycles;
        };

        // CP
        this.opcodeMap[OpCodes.CPA] = (opcodeParam: OpcodeParam) => {
            const comparaisonValue = opcodeParam.parameters[0];
            const A = registerHelper.getA();
            const result = A - comparaisonValue;

            registerHelper.setN(1);
            if (result === 0) {
               registerHelper.setZF(1);
            } else {
                registerHelper.setZF(0);
            }

            /* TODO
            H - Set if no borrow from bit 4.
            C - Set for no borrow. (Set if A < n.) */

            registerHelper.incrementPC(opcodeParam.pcInc);
            return opcodeParam.cycles;
        };

        // INC
        this.opcodeMap[OpCodes.INCBC] = (opcodeParam: OpcodeParam) => {
            registerHelper.incrementBC();
            registerHelper.incrementPC(opcodeParam.pcInc);
            return opcodeParam.cycles;
        };
        this.opcodeMap[OpCodes.INCDE] = (opcodeParam: OpcodeParam) => {
            registerHelper.incrementDE();
            registerHelper.incrementPC(opcodeParam.pcInc);
            return opcodeParam.cycles;
        };
        this.opcodeMap[OpCodes.INCHL] = (opcodeParam: OpcodeParam) => {
            registerHelper.incrementHL();
            registerHelper.incrementPC(opcodeParam.pcInc);
            return opcodeParam.cycles;
        };
        this.opcodeMap[OpCodes.INCSP] = (opcodeParam: OpcodeParam) => {
            registerHelper.incrementSP();
            registerHelper.incrementPC(opcodeParam.pcInc);
            return opcodeParam.cycles;
        };

        this.opcodeMap[OpCodes.INCA] = (opcodeParam: OpcodeParam) => {
            registerHelper.incrementA();
            registerHelper.incrementPC(opcodeParam.pcInc);
            return opcodeParam.cycles;
        };

        // DEC
        this.opcodeMap[OpCodes.DECBC] = (opcodeParam: OpcodeParam) => {
            registerHelper.decrementBC();
            registerHelper.incrementPC(opcodeParam.pcInc);
            return opcodeParam.cycles;
        };
        this.opcodeMap[OpCodes.DECDE] = (opcodeParam: OpcodeParam) => {
            registerHelper.decrementDE();
            registerHelper.incrementPC(opcodeParam.pcInc);
            return opcodeParam.cycles;
        };
        this.opcodeMap[OpCodes.DECHL] = (opcodeParam: OpcodeParam) => {
            registerHelper.decrementHL();
            registerHelper.incrementPC(opcodeParam.pcInc);
            return opcodeParam.cycles;
        };
        this.opcodeMap[OpCodes.DECSP] = (opcodeParam: OpcodeParam) => {
            registerHelper.decrementSP();
            registerHelper.incrementPC(opcodeParam.pcInc);
            return opcodeParam.cycles;
        };

        this.opcodeMap[OpCodes.DECA] = (opcodeParam: OpcodeParam) => {
            registerHelper.decrementA();
            registerHelper.incrementPC(opcodeParam.pcInc);
            return opcodeParam.cycles;
        };
    }
}

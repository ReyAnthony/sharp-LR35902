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
       const  _this = this;
        this.opcodeMap[OpCodes.NOP] = (opcodeParam: OpcodeParam) => {
            registerHelper.incrementPC(opcodeParam.pcInc);
            return opcodeParam.cycles;
        };

        // LD
        function LD_N_with_NNREG(opcodeParam: OpcodeParam, registerValue: number): number {
            const destinationAddress = opcodeParam.parameters[0];
            memory.setValueAtAdress(destinationAddress, registerValue);
            registerHelper.incrementPC(opcodeParam.pcInc);
            return opcodeParam.cycles;
        }

        this.opcodeMap[OpCodes.LDAN] = (opcodeParam: OpcodeParam) => {
            const destinationAddress = opcodeParam.parameters[0];
            registerHelper.setA(memory.getValueAtAdress(destinationAddress));
            registerHelper.incrementPC(opcodeParam.pcInc);
            return opcodeParam.cycles;
        };
        this.opcodeMap[OpCodes.LDBN] = (opcodeParam: OpcodeParam) => {
            return LD_N_with_NNREG(opcodeParam, registerHelper.getB());
        };
        this.opcodeMap[OpCodes.LDCN] = (opcodeParam: OpcodeParam) => {
            return LD_N_with_NNREG(opcodeParam, registerHelper.getC());
        };
        this.opcodeMap[OpCodes.LD_OFFSET_FF_CA] = (opcodeParam: OpcodeParam) => {
            const A = registerHelper.getA();
            const C = registerHelper.getC();
            memory.setValueAtAdress(0xFF + C, A);
            registerHelper.incrementPC(opcodeParam.pcInc);
            return opcodeParam.cycles;
        };

        function LD_NNREG_with_NN(opcodeParam: OpcodeParam, store: (valueToStore: number) => void): number {
            const lsb = opcodeParam.parameters[0];
            const msb = opcodeParam.parameters[1];
            const val = _this.toLittleEndianByte(lsb, msb);
            store(val);
            registerHelper.incrementPC(opcodeParam.pcInc);
            return opcodeParam.cycles;
        }
        this.opcodeMap[OpCodes.LDSPNN] = (opcodeParam: OpcodeParam) => {
           return LD_NNREG_with_NN(opcodeParam, (val) => registerHelper.setSP(val));
        };
        this.opcodeMap[OpCodes.LDHLNN] = (opcodeParam: OpcodeParam) => {
            return LD_NNREG_with_NN(opcodeParam, (val) => registerHelper.setHL(val));
        };
        this.opcodeMap[OpCodes.LDDHLA] = (opcodeParam: OpcodeParam) => {
            const A = registerHelper.getA();
            const HLAddr = registerHelper.getHL();
            memory.setValueAtAdress(HLAddr, A);
            registerHelper.decrementHL();
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

        this.opcodeMap[OpCodes.JPNZNN] = (opcodeParam: OpcodeParam) => {
            const lsb = opcodeParam.parameters[0];
            const msb = opcodeParam.parameters[1];
            if (registerHelper.readZF() === 0b0) {
                registerHelper.setPC(this.toLittleEndianByte(lsb, msb));
            } else {
                registerHelper.incrementPC(opcodeParam.pcInc);
            }
            return opcodeParam.cycles;
        };

        this.opcodeMap[OpCodes.JPNCNN] = (opcodeParam: OpcodeParam) => {
            const lsb = opcodeParam.parameters[0];
            const msb = opcodeParam.parameters[1];
            if (registerHelper.readCY() === 0b0) {
                registerHelper.setPC(this.toLittleEndianByte(lsb, msb));
            } else {
                registerHelper.incrementPC(opcodeParam.pcInc);
            }
            return opcodeParam.cycles;
        };

        this.opcodeMap[OpCodes.JPCNN] = (opcodeParam: OpcodeParam) => {
            const lsb = opcodeParam.parameters[0];
            const msb = opcodeParam.parameters[1];
            if (registerHelper.readCY() === 0b1) {
                registerHelper.setPC(this.toLittleEndianByte(lsb, msb));
            } else {
                registerHelper.incrementPC(opcodeParam.pcInc);
            }
            return opcodeParam.cycles;
        };

        this.opcodeMap[OpCodes.JRZN] = (opcodeParam: OpcodeParam) => {
            const destinationAddress = opcodeParam.parameters[0];
            if (registerHelper.readZF() === 0b1) {
                registerHelper.setPC(destinationAddress);
            } else {
                registerHelper.incrementPC(opcodeParam.pcInc);
            }
            return opcodeParam.cycles;
        };

        this.opcodeMap[OpCodes.JRNZN] = (opcodeParam: OpcodeParam) => {
            const destinationAddress = opcodeParam.parameters[0];
            if (registerHelper.readZF() === 0b0) {
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
        this.opcodeMap[OpCodes.INCA] = (opcodeParam: OpcodeParam) => {
            registerHelper.incrementA();
            const A = registerHelper.getA();
            if (A === 0) {
                registerHelper.setZF(1);
            }
            registerHelper.setN(0);
            if (registerHelper.CY === 1) {
                registerHelper.setH(1);
            }
            registerHelper.incrementPC(opcodeParam.pcInc);
            return opcodeParam.cycles;
        };
        this.opcodeMap[OpCodes.INCC] = (opcodeParam: OpcodeParam) => {
            registerHelper.incrementC();
            registerHelper.incrementPC(opcodeParam.pcInc);
            return opcodeParam.cycles;
        };


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

        // tslint:disable:no-bitwise
        // BITOPS
        this.opcodeMap[OpCodes.XORA] = (opcodeParam: OpcodeParam) => {
            let A  = registerHelper.getA();
            A = A ^ A;
            registerHelper.setA(A);
            if (A === 0) {
                registerHelper.setZF(1);
            }
            registerHelper.setCY(0);
            registerHelper.setN(0);
            registerHelper.setH(0);
            registerHelper.incrementPC(opcodeParam.pcInc);
            return opcodeParam.cycles;
        };

        // prefix opcode
        this.opcodeMap[OpCodes.BITBH] = (opcodeParam: OpcodeParam) => {
            const H = registerHelper.readBit(registerHelper.getH(), 7);
            if (H === 0) {
                registerHelper.setZF(1);
            }
            registerHelper.setN(0);
            registerHelper.setH(1);
            registerHelper.incrementPC(opcodeParam.pcInc);
            return opcodeParam.cycles;
        };
    }
}

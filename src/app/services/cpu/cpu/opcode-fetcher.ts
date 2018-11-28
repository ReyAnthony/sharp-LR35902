import { Memory } from './memory';
import { Opcode, OpCodes, OpcodeMeta } from '../custom-types';

// tslint:disable:max-line-length
export class OpCodeFetcher {

    private opcodeMetas: Array<OpcodeMeta> = [];

    constructor(private memory: Memory) {
       const o = this.makeOpcodeMeta;
       const op = OpCodes;
       this.opcodeMetas =  [
            o(op.NOP, 'NOP', 0, 1, 4, 'NOP', 'Does nothing'),
            // INC
            o(op.INCA, 'INC A', 0, 1, 4, 'INC A', 'Increments A'),
            o(op.DECA, 'DEC A', 0, 1, 4, 'DEC A', 'Decrements A'),
            o(op.INCBC, 'INC BC', 0, 1, 8, 'INC BC', 'Increments BC'),
            o(op.INCDE, 'INC DE', 0, 1, 8, 'INC DE', 'Increments DE'),
            o(op.INCHL, 'INC HL', 0, 1, 8, 'INC HL', 'Increments HL'),
            o(op.INCSP, 'INC SP', 0, 1, 8, 'INC SP', 'Increment the Stack Pointer'),
            // DEC
            o(op.DECBC, 'DEC BC', 0, 1, 8, 'DEC BC', 'Decrements BC'),
            o(op.DECDE, 'DEC DE', 0, 1, 8, 'DEC DE', 'Decrements DE'),
            o(op.DECHL, 'DEC HL', 0, 1, 8, 'DEC HL', 'Decrements HL'),
            o(op.DECSP, 'DEC SP', 0, 1, 8, 'DEC SP', 'Decrements the Stack Pointer'),
            // JP
            o(op.JPNN, 'JP NN', 2, 0, 12, 'JP 0x${1}${0}', 'Jumps to a NN'),
            o(op.JPZN, 'JP Z N', 1, 2, 8, 'JP Z, 0x${0}', 'Jumps to N if Z is set'),
            o(op.JPZNN, 'JP ZN N', 2, 3, 12, 'JP Z, 0x${1}${0}', 'Jumps to N if Z is not set'),
            o(op.JPNZNN, 'JP NZ NN', 2, 3, 12, 'JP NZ, 0x${1}${0}', 'Jumps to NN if Z is not set'),
            o(op.JPNCNN, 'JP NC NN', 2, 3, 12, 'JP NC, 0x${1}${0}', 'Jumps to NN if C is not set'),
            o(op.JPCNN, 'JP C NN', 2, 3, 12, 'JP C, 0x${1}${0}', 'Jumps to NN if C is set'),
            // LD
            o(op.LDBN, 'LD B N', 1, 2, 8, 'LD B, 0x${0}', 'Loads an 8 bit immediate value into B'),
            o(op.LDA, 'LD A N', 1, 2, 8, 'LD A, 0x${0}', 'Loads an 8 bit immediate value into B'),
            // CP
            o(op.CPA, 'CP A N', 1, 2, 8, 'CP A, 0x${0}', 'Compares an immediate 8 bit value with the content of A\n TODO talk about C Z N etc..')
        ];
    }

    fetchOpcode(address: number): Opcode {
        try {
            const opcode = this.memory.getValueAtAdress(address);
            const opcodeMeta: OpcodeMeta = this.opcodeMetas.find((meta) => meta.code === opcode);
            return new Opcode(opcode, this.buildParameters(address, opcodeMeta.params),
                                      opcodeMeta.pcInc, opcodeMeta.cycles, opcodeMeta.template);
        } catch (any) {
            return new Opcode(0, [], 0, 0, 'UNKNOWN');
        }
    }

    private buildParameters(initialPC: number, argc: number): Array<number> {
        const parameters = new Array<number>();
        for (let i = 0; i < argc; i++) {
            parameters.push(this.memory.getValueAtAdress(initialPC + (i + 1)));
        }
        return parameters;
    }

    private makeOpcodeMeta(code: OpCodes, name: string, params: number, pcInc: number, cycles: number, template: string, doc: string): OpcodeMeta {
        return {code, name, params, pcInc, cycles, template, doc};
    }

    getOpcodes(): Array<OpcodeMeta> {
        return this.opcodeMetas;
    }
}

import { Memory } from './memory';
import { Opcode, OpCodes, OpcodeMeta } from '../custom-types';

export class OpCodeFetcher {

    private opcodeMetas: Array<OpcodeMeta> = [];

    constructor(private memory: Memory) {
        this.opcodeMetas.push({ code: OpCodes.NOP, name: 'NOP', params: 0, pcInc: 1, cycles: 4, template: 'NOP', doc: 'Does nothing' });

        this.opcodeMetas.push({ code: OpCodes.INCBC, name: 'INC BC', params: 0, pcInc: 1, cycles: 8,
            template: 'INC BC', doc: 'Increments BC' });
        this.opcodeMetas.push({ code: OpCodes.INCDE, name: 'INC DE', params: 0, pcInc: 1, cycles: 8,
            template: 'INC DE', doc: 'Increments DE' });
        this.opcodeMetas.push({ code: OpCodes.INCHL, name: 'INC HL', params: 0, pcInc: 1, cycles: 8,
            template: 'INC HL', doc: 'Increments HL' });
        this.opcodeMetas.push({ code: OpCodes.INCSP, name: 'INC SP', params: 0, pcInc: 1, cycles: 8,
            template: 'INC SP', doc: 'Increment the Stack Pointer' });

        this.opcodeMetas.push({ code: OpCodes.INCA, name: 'INC A', params: 0, pcInc: 1, cycles: 4,
            template: 'INC A', doc: 'Increments A' });
        this.opcodeMetas.push({ code: OpCodes.DECA, name: 'DEC A', params: 0, pcInc: 1, cycles: 4,
        template: 'DEC A', doc: 'Decrements A' });

        this.opcodeMetas.push({ code: OpCodes.DECBC, name: 'DEC BC', params: 0, pcInc: 1, cycles: 8,
            template: 'DEC BC', doc: 'Decrements BC' });
        this.opcodeMetas.push({ code: OpCodes.DECDE, name: 'DEC DE', params: 0, pcInc: 1, cycles: 8,
            template: 'DEC DE', doc: 'Decrements DE' });
        this.opcodeMetas.push({ code: OpCodes.DECHL, name: 'DEC HL', params: 0, pcInc: 1, cycles: 8,
            template: 'DEC HL', doc: 'Decrements HL' });
        this.opcodeMetas.push({ code: OpCodes.DECSP, name: 'DEC SP', params: 0, pcInc: 1, cycles: 8,
             template: 'DEC SP', doc: 'Decrements the Stack Pointer' });

        this.opcodeMetas.push({ code: OpCodes.CPA, name: 'CP A N', params: 1, pcInc: 2, cycles: 8,
                                       template: 'CP A, #${0}', doc: 'Compares an immediate 8 bit value with the content of A\n' +
                                                                      'TODO talk about C Z N etc..' });

        this.opcodeMetas.push({ code: OpCodes.JPZN,
            name: 'JP Z N', params: 1, pcInc: 2, cycles: 8, template: 'JP Z, #${0}', doc: 'Jumps to N if Z is set' });

        this.opcodeMetas.push({ code: OpCodes.JPNN,
            name: 'JP NN', params: 2, pcInc: 0, cycles: 12, template: 'JP #${1}${0}', doc: 'Jumps to a NN' });
        this.opcodeMetas.push({ code: OpCodes.JPZNN,
            name: 'JP ZN N', params: 2, pcInc: 3, cycles: 12, template: 'JP Z, #${1}${0}', doc: 'Jumps to N if Z is not set' });
        this.opcodeMetas.push({ code: OpCodes.JPNZNN,
            name: 'JP NZ NN', params: 2, pcInc: 3, cycles: 12, template: 'JP NZ, #${1}${0}', doc: 'Jumps to NN if Z is not set' });
        this.opcodeMetas.push({ code: OpCodes.JPNCNN,
            name: 'JP NC NN', params: 2, pcInc: 3, cycles: 12, template: 'JP NC, #${1}${0}', doc: 'Jumps to NN if C is not set' });
        this.opcodeMetas.push({ code: OpCodes.JPCNN,
            name: 'JP C NN', params: 2, pcInc: 3, cycles: 12, template: 'JP C, #${1}${0}', doc: 'Jumps to NN if C is set' });

        this.opcodeMetas.push({ code: OpCodes.LDBN,
            name: 'LD B N', params: 1, pcInc: 2, cycles: 8, template: 'LD B, #${0}', doc: 'Loads an 8 bit immediate value into B' });
        this.opcodeMetas.push({ code: OpCodes.LDA,
            name: 'LD A N', params: 1, pcInc: 2, cycles: 8, template: 'LD A, #${0}', doc: 'Loads an 8 bit immediate value into B' });
    }

    fetchOpcode(address: number): Opcode {
        try {
            const opcode = this.memory.getValueAtAdress(address);
            const opcodeMeta: OpcodeMeta = this.opcodeMetas.find((meta) => meta.code === opcode);
            return new Opcode(opcode, this.buildParameters(address, opcodeMeta.params),
                                      opcodeMeta.pcInc, opcodeMeta.cycles, opcodeMeta.template);
        } catch (any) {
            return new Opcode(0, [], 0, 0, '');
        }
    }

    private buildParameters(initialPC: number, argc: number): Array<number> {
        const parameters = new Array<number>();
        for (let i = 0; i < argc; i++) {
            parameters.push(this.memory.getValueAtAdress(initialPC + (i + 1)));
        }
        return parameters;
    }

    getOpcodes(): Array<OpcodeMeta> {
        return this.opcodeMetas;
    }
}

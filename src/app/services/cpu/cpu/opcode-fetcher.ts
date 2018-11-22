import { Memory } from './memory';
import { Opcode, OpCodes } from '../custom-types';

interface OpcodeMeta {
    params: number;
    pcInc: number;
    cycles: number;
    template: string;
}
export class OpCodeFetcher {

    private opcodeMap: Map<number, OpcodeMeta> = new Map();

    constructor(private memory: Memory) {
        this.opcodeMap[OpCodes.NOP] = {params: 0, pcInc: 1, cycles: 4, template: 'NOP'};

        this.opcodeMap[OpCodes.INCBC] = {params: 0, pcInc: 1, cycles: 8, template: 'INC BC'};
        this.opcodeMap[OpCodes.INCDE] = {params: 0, pcInc: 1, cycles: 8, template: 'INC DE'};
        this.opcodeMap[OpCodes.INCHL] = {params: 0, pcInc: 1, cycles: 8, template: 'INC HL'};
        this.opcodeMap[OpCodes.INCSP] = {params: 0, pcInc: 1, cycles: 8, template: 'INC SP'};

        this.opcodeMap[OpCodes.INCA] = {params: 0, pcInc: 1, cycles: 4, template: 'INC A'};
        this.opcodeMap[OpCodes.DECA] = {params: 0, pcInc: 1, cycles: 4, template: 'DEC A'};

        this.opcodeMap[OpCodes.DECBC] = {params: 0, pcInc: 1, cycles: 8, template: 'DEC BC'};
        this.opcodeMap[OpCodes.DECDE] = {params: 0, pcInc: 1, cycles: 8, template: 'DEC DE'};
        this.opcodeMap[OpCodes.DECHL] = {params: 0, pcInc: 1, cycles: 8, template: 'DEC HL'};
        this.opcodeMap[OpCodes.DECSP] = {params: 0, pcInc: 1, cycles: 8, template: 'DEC SP'};

        this.opcodeMap[OpCodes.CPA] = {params: 1, pcInc: 2, cycles: 8, template: 'CP A, #${0}'};

        this.opcodeMap[OpCodes.JPZN] = {params: 1, pcInc: 2, cycles: 8, template: 'JP Z, #${0}'};

        this.opcodeMap[OpCodes.JPNN] = {params: 2, pcInc: 3, cycles: 12, template: 'JP #${1}${0}'};
        this.opcodeMap[OpCodes.JPZNN] = {params: 2, pcInc: 3, cycles: 12, template: 'JP Z, #${1}${0}'};

        this.opcodeMap[OpCodes.LDBN] = {params: 1, pcInc: 2, cycles: 8, template: 'LD B, #${0}'};
        this.opcodeMap[OpCodes.LDA] = {params: 1, pcInc: 2, cycles: 8, template: 'LD A, #${0}'};
    }

    fetchOpcode(address: number): Opcode {
        try {
            const opcode = this.memory.getValueAtAdress(address);
            const opcodeMeta: OpcodeMeta = this.opcodeMap[opcode];
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
}

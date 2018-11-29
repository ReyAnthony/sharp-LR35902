import { Memory } from './memory';
import { Opcode, OpCodes, OpcodeMeta } from '../custom-types';

// tslint:disable:max-line-length
export class OpCodeFetcher {

    private opcodeMetas: Array<OpcodeMeta> = [];

    constructor(private memory: Memory) {
       const o = this.makeOpcodeMeta;
       const op = OpCodes;
       this.opcodeMetas =  [

            o(op.NOP,  0, 4, 'NOP', 'Does nothing'),

            // INC
            o(op.INCA, 0, 4, 'INC A', 'Increments A, Z is set if result is zero. N is reset. H is set if carry from bit 3. C is Not affected'),
            o(op.INCC, 0, 4, 'INC C', 'Increments C, Z is set if result is zero. N is reset. H is set if carry from bit 3. C is Not affected'),
            o(op.DECA, 0, 4, 'DEC A', 'Decrements A'),
            o(op.INCBC, 0, 8, 'INC BC', 'Increments BC'),
            o(op.INCDE, 0, 8, 'INC DE', 'Increments DE'),
            o(op.INCHL, 0, 8, 'INC HL', 'Increments HL'),
            o(op.INCSP, 0, 8, 'INC SP', 'Increment the Stack Pointer'),

            // DEC
            o(op.DECBC, 0, 8, 'DEC BC', 'Decrements BC'),
            o(op.DECDE, 0, 8, 'DEC DE', 'Decrements DE'),
            o(op.DECHL, 0, 8, 'DEC HL', 'Decrements HL'),
            o(op.DECSP, 0, 8, 'DEC SP', 'Decrements the Stack Pointer'),

            // JP
            o(op.JPNN, 2, 12, 'JP 0x${1}${0}', 'Jumps to a NN'),
            o(op.JPNZNN, 2, 12, 'JP NZ, 0x${1}${0}', 'Jumps to NN if Z is not set'),
            o(op.JPNCNN, 2, 12, 'JP NC, 0x${1}${0}', 'Jumps to NN if C is not set'),
            o(op.JPCNN, 2, 12, 'JP C, 0x${1}${0}', 'Jumps to NN if C is set'),
            o(op.JPZNN, 2, 12, 'JP Z, 0x${1}${0}', 'Jumps to N if Z is not set'),

            // JR
            o(op.JRZN, 1, 8, 'JR Z, 0x${0}', 'Jumps to N if Z is set'),
            o(op.JRNZN, 1, 8, 'JR NZ, 0x${0}', 'Jumps to N if Z is not set'),

            // LD
            o(op.LDAN, 1, 8, 'LD A, 0x${0}', 'Put immediate 8 bit n into A'),
            o(op.LDBN, 1, 8, 'LD B, 0x${0}', 'Put value of register B into immediate 8 bit n'),
            o(op.LDCN, 1, 8, 'LD C, 0x${0}', 'Put value of register C into immediate 8 bit n'),
            o(op.LD_OFFSET_FF_CA, 0, 8, 'LD [0xFF + C], A', 'Put A into address $FF00 + register C'),
            o(op.LDSPNN, 2, 12, 'LD SP, 0x${1}${0}', 'Loads a 16 bit immediate value into SP'),
            o(op.LDHLNN, 2, 12, 'LD HL, 0x${1}${0}', 'Loads a 16 bit immediate value into HL'),
            o(op.LDDHLA, 0, 8, 'LDD [HL], A', 'Put A into memory address HL. Decrement HL. Same as: LD (HL),A - DEC HL'),

            // CP
            o(op.CPA, 1, 8, 'CP A, 0x${0}', 'Compares an immediate 8 bit value with register A. TODO talk about C Z N etc..'),

            // BITOPS
            o(op.XORA, 0, 4, 'XOR A', 'Logical exclusive OR n with register A, result in A. Z is set if result is 0. N, H & C are reset.'),

            // PREFIX opcodes
            o(op.BITBH, 0, 8, 'BIT 7,H', 'Test bit b in register H. Z is set if bit b of register H is 0. N is reset. H is set. C is not affected.')
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

    private makeOpcodeMeta(code: OpCodes, params: number, cycles: number, template: string, doc: string): OpcodeMeta {
        const isPrefix = code.toString(16).includes(OpCodes.PREFIX.toString(16));
        const bytes = isPrefix ? 2 : 1;
        const pcInc = params + bytes;
        return {code, name: template, params, pcInc, cycles, template, doc, opcodeBytes: bytes};
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

    getOpcodes(): Array<OpcodeMeta> {
        return this.opcodeMetas;
    }
}

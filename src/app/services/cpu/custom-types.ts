export type bit = 0|1;
export class Opcode {
    constructor(public opcode: number, public parameters: Array<number>,
                public pcInc: number, public cycles: number, public opcodeBytes,
                private template: string) {}

    getOpcodeHumanReadable(): string {

        let humanReadable = this.template;
        for (let i = 0; i < this.parameters.length; i++) {
            humanReadable = humanReadable.replace(`\${${i}}`, this.parameters[i].toString(16).toUpperCase().padStart(2, '0'));
        }
        return humanReadable;
    }

    getOpcodeTotalLength(): number {
        const length = this.parameters.length + this.opcodeBytes;
        return length > 0 ? length : 1;
    }
}
export interface OpcodeMeta {
    code: OpCodes;
    name: string;
    params: number;
    pcInc: number;
    cycles: number;
    template: string;
    doc: string;
    opcodeBytes: number;
}

export const DEMO_PROGRAM = '0x0\n' +
     '0x3E ' + '0x01\n'             // LD A, #01
   + '0xFE ' + '0xFF\n'             // :103  CP A, #FF
   + '0xCA ' + '0x0F ' + '0x01\n'  // JP Z, #010F (Little Endian)
   + '0x3C\n'                        // INC A
   + '0x13\n'                        // INC DE
   + '0x23\n'                        // INC HL
   + '0x33\n'                        // INC SP
   + '0xC3 ' + '0x03 ' + '0x01\n'  // JP #0103 (Little Endian)
   + '0x3D\n'                        // :x010F DEC A
   + '0xFE ' + '0x0\n'              // CP A, #00
   + '0xCA ' + '0x03 ' + '0x01\n'  // JP Z, #0103 (Little Endian)
   + '0xC3 ' + '0x0F ' + '0x01'; // JP #010F (Little Endian)

export enum OpCodes {
    NOP = 0x00,
    // Interrupts
    EI = 0xFB,
    DI = 0xF3,
    // CP
    CPA = 0xFE,
    // LD
    LDAN = 0x3E,
    LDBN = 0x06,
    LDCN = 0x0E,
    LD_OFFSET_FF_CA = 0xE2,
    LDSPNN = 0x31,
    LDHLNN = 0x21,
    LDDHLA = 0x32,
    // INC
    INCA = 0x3C,
    INCC = 0x0C,
    INCBC = 0x03,
    INCDE = 0x13,
    INCHL = 0x23,
    INCSP = 0x33,
    // DEC
    DECA = 0x3D,
    DECBC = 0x0B,
    DECDE = 0x1B,
    DECHL = 0x2B,
    DECSP = 0x3B,

    JPNN = 0xC3,
    JPZNN = 0xCA,
    JPNZNN = 0xC2,
    JPNCNN = 0xD2,
    JPCNN = 0xDA,

    JRZN = 0x28,
    JRNZN = 0x20,

    // BITOPS
    XORA = 0xAF,

    // PREFIX
    PREFIX = 0xCB,
    BITBH = 0xCB7C
}

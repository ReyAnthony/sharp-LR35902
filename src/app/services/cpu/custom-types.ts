export type bit = 0|1;
export class Opcode {
    constructor(public opcode: number, public parameters: Array<number>,
                public pcInc: number, public cycles: number,
                private template: string) {}

    getOpcodeHumanReadable(): string {

        let humanReadable = this.template;
        for (let i = 0; i < this.parameters.length; i++) {
            humanReadable = humanReadable.replace(`\${${i}}`, this.parameters[i].toString(16).toUpperCase().padStart(2, '0'));
        }
        return humanReadable;
    }
}
export enum OpCodes {
    NOP = 0x00,
    // Interrupts
    EI = 0xFB,
    DI = 0xF3,
    // CP
    CPA = 0xFE,
    // LD
    LDBN = 0x06,
    LDA = 0x3E,
    // INC
    INCA = 0x3C,
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
    JPZN = 0x20,
    JPZNN = 0xCA,
    JPNZNN = 0xC2,
    JPNCNN = 0xD2,
    JPCNN = 0xDA
}

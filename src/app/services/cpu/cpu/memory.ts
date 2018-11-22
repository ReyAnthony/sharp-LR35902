export class Memory {

    // TODO should use a virtual address space and split the memory according to the memory map
    // eg. ROM can't be written etc..
    private readonly _64KB_RAM: number = 0xFFFF;
    private memory: Array<number>;

    constructor() {
        this.reset();
    }

    getValueAtAdress(address: number): number {
        // TODO should never return more than 0xFF
        const val =  this.memory[address];
        return val === undefined ? 0x0 : val;
    }

    setValueAtAdress(address: number, value: number) {
        this.memory[address] = value;
    }

    reset() {
        this.memory = new Array(this._64KB_RAM);
    }

    loadProgram(program: string) {

        // TODO remove, we start at PC init for now
        let address = 0x100;
        for (const c of program.split('\n')) {
            this.memory[address++] = Number.parseInt(c, 16);
        }
    }

    // TODO should be using virtual address space
    getMemory() {
        return this.memory;
    }
}

const _64KB_RAM = 0xFFFF;

export class Memory {

    // TODO should be able to set banks (carts etc..)
    // TODO should use a virtual address space and split the memory according to the memory map
    // TODO Ideally this should be an interface so that the memory impl is irrelevent to the CPU etc...
    // eg. ROM can't be written etc..
    private memory: Array<number>;

    constructor(private size: number = _64KB_RAM) {
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
        this.memory = new Array(this.size);
    }

    loadProgram(program: string, loadAddress: number) {

        for (const c of program.split('\n')) {
            this.memory[loadAddress++] = Number.parseInt(c, 16);
        }
    }

    // TODO should be using virtual address space
    getMemory() {
        return this.memory;
    }
}

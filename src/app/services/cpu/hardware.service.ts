import { Injectable } from '@angular/core';
import { CPU } from './cpu/cpu';
import { Memory } from './cpu/memory';
import { delay } from 'q';
import { OpCodeFetcher } from './cpu/opcode-fetcher';
import { OpcodeMeta, Opcode } from './custom-types';

@Injectable({
  providedIn: 'root'
})
export class HardwareService {

  private cpu: CPU;
  private memory: Memory;
  private opcodeFetcher: OpCodeFetcher;

  private running: boolean;
  private runP: Promise<void>;
  private paused: boolean;

  constructor() {
    this.memory = new Memory();
    this.opcodeFetcher = new OpCodeFetcher(this.memory);
    this.cpu = new CPU(this.memory, this.opcodeFetcher);
  }

  isRunning(): boolean {
    return this.running;
  }
  isPaused(): boolean {
    return this.paused;
  }

  turnOn() {
    if (this.runP) {
      this.running = false;
      this.runP.finally(() => this.run());
    } else {
      this.runP = this.run();
    }
  }

  async run() {
    this.running = true;
    while (this.running) {
      if (!this.paused) {
        await this.cpu.step();
      } else {
        await delay(1);
      }
    }
  }

  pause() {
    this.paused = !this.paused;
  }

  stop() {
    this.running = false;
    this.paused = false;
  }

  reset() {
    this.stop();
    this.memory.reset();
    this.cpu.reset();
  }

  loadProgram(program: string) {
    this.reset();
    this.memory.loadProgram(program, this.cpu.pc);
  }

  setCPuStepMs(ms: number) {
    this.cpu.setCpuStep(ms);
  }

  getMemory(startAddress: number, endAddress: number): Array<{address: number, value: number, opcodeHumanReadable: string}> {
    const a = new Array();
    let currentAddress = startAddress;
    let nextHumanReadable = startAddress;

    for (const value of this.memory.getMemory().slice(startAddress, endAddress)) {

      if (currentAddress === nextHumanReadable) {
        const opcode = this.opcodeFetcher.fetchOpcode(currentAddress);
        const opcodeHumanReadable = opcode.getOpcodeHumanReadable();
        a.push({
          address: currentAddress,
          value: value,
          opcodeHumanReadable: opcodeHumanReadable ? opcodeHumanReadable : 'UNKNOWN'
        });
        nextHumanReadable = currentAddress + (opcode.parameters.length + 1 ? opcode.parameters.length + 1 : 1);
      } else {
        a.push({
          address: currentAddress,
          value: value,
          opcodeHumanReadable: ''
        });
      }
      currentAddress++;
    }
    return a;
  }

  updateMemory(address: number, value: number) {
    this.memory.setValueAtAdress(address, value);
  }

  getCpuRegisters(): Array<{name: string, value: number}> {
    return [
        {name: 'a', value: this.cpu.getA()},
        {name: 'f', value: this.cpu.getF()},
        {name: 'b', value: this.cpu.getB()},
        {name: 'c', value: this.cpu.getC()},
        {name: 'd', value: this.cpu.getD()},
        {name: 'e', value: this.cpu.getE()},
        {name: 'af', value: this.cpu.af},
        {name: 'bc', value: this.cpu.bc},
        {name: 'de', value: this.cpu.de},
        {name: 'hl', value: this.cpu.hl},
        {name: 'sp', value: this.cpu.sp},
        {name: 'pc', value: this.cpu.pc}
      ];
  }

  getOpcodes(): Array<OpcodeMeta> {
    return this.opcodeFetcher.getOpcodes();
  }
}

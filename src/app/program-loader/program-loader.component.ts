import { Component, OnInit } from '@angular/core';
import { HardwareService } from '../services/cpu/hardware.service';
import { ProgramLoaderService } from '../services/program-loader.service';
import { DEMO_PROGRAM } from '../services/cpu/custom-types';
import { Memory } from '../services/cpu/cpu/memory';
import { OpCodeFetcher } from '../services/cpu/cpu/opcode-fetcher';
import { DocumentationService } from '../services/documentation.service';

@Component({
  selector: 'app-program-loader',
  templateUrl: './program-loader.component.html',
  styleUrls: ['./program-loader.component.css']
})
export class ProgramLoaderComponent implements OnInit {

  constructor(private hardwareService: HardwareService,
              private programLoaderService: ProgramLoaderService) { }

  ngOnInit() {
  }

  fetchTestProgram() {
    this.programLoaderService.program = DEMO_PROGRAM;
  }

  loadProgram() {
    this.hardwareService.loadProgram(this.programLoaderService.program.replace(/\s/g, '\n'));
  }

  clear() {
    this.programLoaderService.program = '';
  }

  getAsAsm(): string {
    const prog = this.programLoaderService.program.replace(/\s/g, '\n');
    const maxRam = prog.split('\n').length;
    const memory = new Memory(maxRam);
    const opcodeFetcher = new OpCodeFetcher(memory);

    memory.loadProgram(prog, 0);

    let str = '';
    let currentAddress = 0;
    while (currentAddress < maxRam) {
      const opcode = opcodeFetcher.fetchOpcode(currentAddress);
      const opcodeHumanReadable = opcode.getOpcodeHumanReadable();
      opcodeHumanReadable !== 'UNKNOWN' ?  str += opcodeHumanReadable + '\n' :  str += '--\n';
      currentAddress = currentAddress + (opcode.parameters.length > 0 ? opcode.parameters.length + 1 : 1);
    }
    return str;
  }
}

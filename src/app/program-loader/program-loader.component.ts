import { Component, OnInit } from '@angular/core';
import { HardwareService } from '../services/cpu/hardware.service';
import { ProgramLoaderService } from '../services/program-loader.service';
import { DEMO_PROGRAM } from '../services/cpu/custom-types';

@Component({
  selector: 'app-program-loader',
  templateUrl: './program-loader.component.html',
  styleUrls: ['./program-loader.component.css']
})
export class ProgramLoaderComponent implements OnInit {

  constructor(private hardwareService: HardwareService, private programLoaderService: ProgramLoaderService) { }

  ngOnInit() {
  }

  fetchTestProgram() {
    this.programLoaderService.program = DEMO_PROGRAM;
  }

  loadProgram() {
    this.hardwareService.loadProgram(this.programLoaderService.program.replace(/\s/g, '\n'));
  }
}

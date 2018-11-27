import { Component, OnInit } from '@angular/core';
import { HardwareService } from '../services/cpu/hardware.service';
import { ProgramLoaderService } from '../services/program-loader.service';

@Component({
  selector: 'app-program-loader',
  templateUrl: './program-loader.component.html',
  styleUrls: ['./program-loader.component.css']
})
export class ProgramLoaderComponent implements OnInit {

  constructor(private hardwareService: HardwareService, private programLoaderService: ProgramLoaderService) { }

  ngOnInit() {
  }

  loadProgram() {
    this.hardwareService.loadProgram(this.programLoaderService.program.replace(/\s/g, '\n'));
  }
}

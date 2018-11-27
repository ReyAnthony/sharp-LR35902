import { Component, OnInit } from '@angular/core';
import { HardwareService } from '../services/cpu/hardware.service';

@Component({
  selector: 'app-program-loader',
  templateUrl: './program-loader.component.html',
  styleUrls: ['./program-loader.component.css']
})
export class ProgramLoaderComponent implements OnInit {

  program: string;
  constructor(private hardwareService: HardwareService) { }

  ngOnInit() {
  }

  loadProgram() {
    this.hardwareService.loadProgram(this.program.replace(/\s/g, '\n'));
  }
}

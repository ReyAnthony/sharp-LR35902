import { Component, OnInit } from '@angular/core';
import { HardwareService } from '../services/cpu/hardware.service';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css']
})
export class ControlsComponent implements OnInit {

  private ms = 20;
  constructor(private hardwareService: HardwareService) { }

  ngOnInit() {
    this.setCpuMs();
  }

  turnOn() {
    this.hardwareService.turnOn();
  }

  pause() {
    this.hardwareService.pause();
  }

  stop() {
    this.hardwareService.stop();
  }

  reset () {
    this.hardwareService.reset();
  }

  loadTestProgram() {
    this.hardwareService.loadTestProgram();
  }

  isPaused(): boolean {
    return this.hardwareService.isPaused();
  }

  isRunning(): boolean {
    return this.hardwareService.isRunning();
  }

  setCpuMs() {
    this.hardwareService.setCPuStepMs(this.ms);
  }
}

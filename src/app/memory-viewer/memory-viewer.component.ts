import { Component, OnInit } from '@angular/core';
import { HardwareService } from '../services/cpu/hardware.service';

type mappedMemory =  Array<{address: number, value: number, opcodeHumanReadable: string}>;

@Component({
  selector: 'app-memory-viewer',
  templateUrl: './memory-viewer.component.html',
  styleUrls: ['./memory-viewer.component.css']
})
export class MemoryViewerComponent implements OnInit {

  startAddress = 0x100;
  endAddress = 0x100 + 15;
  followPC = false;
  memEdit = false;
  memoryCopy: mappedMemory;

  constructor(private hardwareService: HardwareService) { }
  ngOnInit() {
  }

  isPC(address: number): boolean {
    return this.hardwareService.getCpuRegisters()
                      .find((o) => o.name === 'pc')
                      .value === address;
  }

  pcOnUnknownOpcode(address: number): boolean {
    return this.isPC(address) &&  this.getMemory().find((m) => m.address === address).opcodeHumanReadable === 'UNKNOWN';
  }

  getMemory(): mappedMemory {
    if (!this.followPC) {
      return this.hardwareService.getMemory(this.startAddress, this.endAddress);
    } else {
      return this.hardwareService.getMemory(this.getPC(), this.getPC() + 16);
    }
  }

  updateMem() {
    this.memoryCopy = this.getMemory();
  }

  saveMemEdits() {
    this.memoryCopy.forEach((e) => {
      this.hardwareService.updateMemory(e.address, e.value);
    });
    this.memoryCopy = this.getMemory();
  }

  private getPC(): number {
    return this.hardwareService.getCpuRegisters()
                      .find((o) => o.name === 'pc').value;
  }
}

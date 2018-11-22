import { Component, OnInit } from '@angular/core';
import { HardwareService } from '../services/cpu/hardware.service';

@Component({
  selector: 'app-memory-viewer',
  templateUrl: './memory-viewer.component.html',
  styleUrls: ['./memory-viewer.component.css']
})
export class MemoryViewerComponent implements OnInit {

  startAddress = 0x100;
  endAddress = 0x100 + 15;
  followPC = false;

  constructor(private hardwareService: HardwareService) { }
  ngOnInit() {
  }

  isPC(address: number): boolean {
    return this.hardwareService.getCpuRegisters()
                      .find((o) => o.name === 'pc')
                      .value === address;
  }

  getMemory(): Array<{address: number, value: number, opcodeHumanReadable: string}> {
    if (!this.followPC) {
      return this.hardwareService.getMemory(this.startAddress, this.endAddress);
    } else {
      return this.hardwareService.getMemory(this.getPC(), this.getPC() + 16);
    }
  }

  private getPC(): number {
    return this.hardwareService.getCpuRegisters()
                      .find((o) => o.name === 'pc').value;
  }
}

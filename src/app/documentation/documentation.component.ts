import { Component, OnInit } from '@angular/core';
import { HardwareService } from '../services/cpu/hardware.service';
import { OpcodeMeta, Opcode } from '../services/cpu/custom-types';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.css']
})
export class DocumentationComponent implements OnInit {

  filter = '';

  constructor(private hardwareService: HardwareService) { }

  ngOnInit() {
  }

  getOpcodes(): Array<OpcodeMeta> {
    const opcodes = this.hardwareService.getOpcodes();
    if (this.filter !== '' ) {
      return opcodes.filter((o) => o.name.toLowerCase().includes(this.filter.toLowerCase()));
    }
    return opcodes;
  }
}

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
  private opcodes: Array<OpcodeMeta>;

  constructor(private hardwareService: HardwareService) { }

  ngOnInit() {
    this.opcodes = this.hardwareService.getOpcodes();
  }

  getOpcodes(): Array<OpcodeMeta> {
    return this.opcodes;
  }

  getFilteredOpcodes(): Array<OpcodeMeta> {
    if (this.filter !== '' ) {
      return this.opcodes.filter((o) => o.name.toLowerCase().includes(this.filter.toLowerCase()));
    }
    return this.opcodes;
  }
}

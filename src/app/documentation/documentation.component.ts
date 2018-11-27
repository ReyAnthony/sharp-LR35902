import { Component, OnInit } from '@angular/core';
import { HardwareService } from '../services/cpu/hardware.service';
import { OpcodeMeta, Opcode } from '../services/cpu/custom-types';
import { DocumentationService } from '../services/documentation.service';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.css']
})
export class DocumentationComponent implements OnInit {

  private opcodes: Array<OpcodeMeta>;

  constructor(private hardwareService: HardwareService, private documentationService: DocumentationService) { }

  ngOnInit() {
    this.opcodes = this.hardwareService.getOpcodes();
  }

  getOpcodes(): Array<OpcodeMeta> {
    return this.opcodes;
  }

  getFilteredOpcodes(): Array<OpcodeMeta> {
    if (this.documentationService.filter !== '' ) {
      return this.opcodes.filter((o) => o.name.toLowerCase().includes(this.documentationService.filter.toLowerCase()));
    }
    return this.opcodes;
  }
}

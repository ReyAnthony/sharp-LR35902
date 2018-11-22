import { Component, OnInit } from '@angular/core';
import { HardwareService } from '../services/cpu/hardware.service';

@Component({
  selector: 'app-cpu-infos',
  templateUrl: './cpu-infos.component.html',
  styleUrls: ['./cpu-infos.component.css']
})
export class CpuInfosComponent implements OnInit {

  constructor(public hardwareService: HardwareService) { }

  ngOnInit() {
  }
}

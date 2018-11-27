import { Component, OnInit } from '@angular/core';
import { AssemblerService } from '../services/assembler.service';

@Component({
  selector: 'app-assembler',
  templateUrl: './assembler.component.html',
  styleUrls: ['./assembler.component.css']
})
export class AssemblerComponent implements OnInit {

  constructor(private assemblerService: AssemblerService) { }

  ngOnInit() {
  }

}

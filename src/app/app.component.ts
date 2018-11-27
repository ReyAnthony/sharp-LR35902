import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  processorPanel = true;
  docPanel = false;
  asmPanel = false;
  programLoaderPanel = false;

  private reset() {
    this.processorPanel = false;
    this.docPanel = false;
    this.asmPanel = false;
    this.programLoaderPanel = false;
  }

  goToProcessorPanel() {
    this.reset();
    this.processorPanel = true;
  }

  goToDocPanel() {
    this.reset();
    this.docPanel = true;
  }

  goToAsmPanel() {
    this.reset();
    this.asmPanel = true;
  }

  goToProgramLoaderPanel() {
    this.reset();
    this.programLoaderPanel = true;
  }
}

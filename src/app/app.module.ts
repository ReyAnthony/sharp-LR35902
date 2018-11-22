import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ScreenComponent } from './screen/screen.component';
import { ControlsComponent } from './controls/controls.component';
import { CpuInfosComponent } from './cpu-infos/cpu-infos.component';
import { BinaryPipe } from './misc/pipes/binaryPipe';
import { MemoryViewerComponent } from './memory-viewer/memory-viewer.component';
import { HexPipe } from './misc/pipes/hexPipe';

@NgModule({
  declarations: [
    AppComponent,
    ScreenComponent,
    ControlsComponent,
    CpuInfosComponent,
    BinaryPipe,
    HexPipe,
    MemoryViewerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

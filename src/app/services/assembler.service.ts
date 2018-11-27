import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AssemblerService {

  assemblyBeingWritten: string;

  constructor() { }
}

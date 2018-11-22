import { PipeTransform, Pipe } from '@angular/core';

@Pipe({name: 'hexPipe'})
export class HexPipe implements PipeTransform {
    transform(value: number): string {
        if (!value) { return '0000'; }
        const hex = value.toString(16);
        return hex.padStart(4, '0').toUpperCase();
    }
}

import { PipeTransform, Pipe } from '@angular/core';

@Pipe({name: 'binaryPipe'})
export class BinaryPipe implements PipeTransform {
    transform(value: number): string {
        if (!value) { return '0000000000000000'; }
        const bin = value.toString(2);
        return bin.padStart(16, '0');
    }
}

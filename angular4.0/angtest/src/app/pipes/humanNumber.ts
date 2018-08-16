import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'humanNumber'
})

export class humanNumberPipe implements PipeTransform {
    transform(count: number): string {
        if (count < 1000) {
            return `${count}`;
        } else if (count < 1000 * 1000) {
            return `${(count / 1000).toFixed(1)}K`;
        } else {
            return `${(count / (1000 * 1000)).toFixed(1)}M`;
        }
    }
}

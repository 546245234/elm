import {Pipe,PipeTransform} from '@angular/core';

@Pipe({
    name:'thousand'
})

export class thousandPipe implements PipeTransform{
    transform(count:number):string{
        let arr = [];
        while(count>0){
            arr.push(count%1000);
            count = Math.floor(count/1000);
        }

        return arr.reverse().join(',');
    }
}
import {Pipe, PipeTransform} from '@angular/core';

@Pipe({

    name : 'sum'
})

export class sum implements PipeTransform{
   
    transform(val : number) : number{

        return val+=10;

    }
}
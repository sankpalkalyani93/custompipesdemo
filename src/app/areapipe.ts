import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name : 'area'
})

export class area implements PipeTransform{

    transform(val : number) : number{

        return val*val;
    }

}
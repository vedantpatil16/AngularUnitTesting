import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myAdd'
})
export class MyAddPipe implements PipeTransform {

  transform(value: number, ...args: number[]): number 
  {
    let No1 = value;
    let iAns = No1 + args[0];

    return iAns;
  }

}

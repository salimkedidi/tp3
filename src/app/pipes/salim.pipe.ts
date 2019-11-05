import {Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name:'x'
})

export class SalimPipePiepe implements PipeTransform {

  transform(nom:string): string{
    return '*'+nom+'***';

  }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dg'
})
export class DgPipe implements PipeTransform {

  transform(num:number):string {
    return "Etudiant num °"+num;
  }

}

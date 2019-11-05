import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'moyenne'
})
export class MoyennePipe implements PipeTransform {

  transform(moy:number): String {
    if(moy>=16)
     return moy+": Mention Trés Bien";
     if(moy>=14)
     return moy+": Mention Bien";
     if(moy>=12)
     return moy+": Mention assez bien";
     if(moy>=10)
     return moy+": Mention Passable";
     else  return moy+": refuse";


  }

}

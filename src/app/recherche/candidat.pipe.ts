import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'candidat'
})
export class CandidatPipe implements PipeTransform {

  
  transform(value: any, term: any): any {

    if (term == null) {
      return value;
    } else {
      return value.filter(item => (item.nom.includes(term)));

    }


  }
}

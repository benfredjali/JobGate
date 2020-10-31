import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stage'
})
export class StagePipe implements PipeTransform {


  transform(value: any, term: any): any {

    if (term == null) {
      return value;
    } else {
      return value.filter(item => (item.titre.includes(term)));

    }


  }


}

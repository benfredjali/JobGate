import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'travaille'
})
export class TravaillePipe implements PipeTransform {

  transform(value: any, termTravaille: any): any {

    if (termTravaille == null) {
      return value;
    } else {
      return value.filter(item => (item.titre.includes(termTravaille)));

    }
  }

}

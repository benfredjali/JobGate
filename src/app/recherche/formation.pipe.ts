import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formation'
})
export class FormationPipe implements PipeTransform {
  transform(list: any[], value: any[], key: any[]): any[] {
    value.forEach((name, index) => {
      if (name) {
        list = list.filter((item) => {
          return (item[key[index]]
            .toString()
            .toLowerCase()
            .indexOf(name) !== -1)
        });
      }
    });
    return list;
  }
}

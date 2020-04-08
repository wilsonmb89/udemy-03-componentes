import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(array: any[], text: string, columna: string): any[] {
    if (!!array && !!text && !!columna) {
      return array.filter((filterstr) => filterstr[columna].toLowerCase().includes(text.toLowerCase()));
    }
    return array;
  }

}

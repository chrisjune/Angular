import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'titlecasing'
})

export class TitleCasingPipe implements PipeTransform {
  transform(value: string) {
      let preposition = [
        'of',
        'the'
      ];
      let arrval: string[];
      if (!value) { return null; }
      if (value.length > 0) {
        arrval = value.toLowerCase().split(' ');
        for (let i = 0 ; i < arrval.length; i++) {
          if (i > 0 && preposition.includes(arrval[i])) {
          arrval[i] = arrval[i].toLowerCase();
          }else {
            arrval[i] = arrval[i].substring(0, 1).toUpperCase() + arrval[i].substring(1) + ' ';
          }
        }
      }
      return arrval.join(' ');
    }
}


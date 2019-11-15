import { Pipe, PipeTransform } from '@angular/core';

const CENSORED = [
  'rigips',
  'vario',
  'pro',
  'isover',
  'fire',
  'fire\\+',
  'ultrastil',
  'premium',
  'finisz\\+',
  '4pro',
  'hydro',
  'duraline',
  'profin',
  'start',
  'start\\+',
];

@Pipe({name: 'censored'})
export class CensoredPipe implements PipeTransform {
  transform(value: string): string {
    for (let c of CENSORED) {
      value = value.replace(new RegExp(`(^|\\s)${c}(\\s|$)`, 'gi'), ' ');
    }
    return value;
  }
}
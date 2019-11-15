import { Component, Input } from '@angular/core';
import { data } from './data';

@Component({
  selector: 'calc',
  templateUrl: 'calc.component.html',
  styleUrls: [ './calc.component.scss' ]
})
export class CalcComponent {
  products = data;

  currentProduct = null;
}

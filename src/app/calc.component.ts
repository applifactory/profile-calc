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

  area = '';

  selectProduct(product) {
    this.currentProduct = product;
    for (let item of this.currentProduct.items) {
      item.currentMaterialUsage = item.materials[0].usage;
    }
  }

  setArea(area) {
    this.area = (area || '').replace(/[\D]+/g,'');
  }
}

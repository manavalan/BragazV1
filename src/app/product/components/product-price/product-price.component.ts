import { Component, OnInit,ViewEncapsulation ,Input} from '@angular/core';
import { Product } from './../../../core/models/product';
// import {ProductSize} from './../../../core/models/ProductSize';

@Component({
  selector: 'product-price',
  templateUrl: './product-price.component.html',
  styleUrls: ['./product-price.component.scss'],
  encapsulation: ViewEncapsulation.None 
})
export class ProductPriceComponent implements OnInit {
@Input() product:Product;

  constructor() { }

  ngOnInit() {
console.log(this.product);
  }

}

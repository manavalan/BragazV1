import { Component, OnInit,Input } from '@angular/core';
import { environment } from './../../../../environments/environment';
import { Cart } from './../../../core/models/Cart';
@Component({
  selector: 'linelist',
  templateUrl: './linelist.component.html',
  styleUrls: ['./linelist.component.scss']
})
export class LinelistComponent implements OnInit {
  @Input() lineItems:Cart;
  constructor() { }
  productImage: string;
  productName: string;
  pricePerUnit: number;
  productSet: number;
  totalPrice:number;

  ngOnInit() {


    this.productImage=environment.API_ENDPOINT + this.lineItems.Product.ProductImages[0].ThumbUrl;
    this.productName=this.lineItems.Product.ProductName;
    this.pricePerUnit=this.lineItems.PricePerUnit;
    this.productSet=12;
    this.totalPrice =0;
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { Product } from './../../../core/models/product';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'product-variants',
  templateUrl: './product-variants.component.html',
  styleUrls: ['./product-variants.component.scss']
})


export class ProductVariantsComponent implements OnInit {
  @Input() product: Product;
  ProductSize: any;
  ProductColor: any;
  form: FormGroup;
  objectProps;
  TotalPrice: any;
  constructor(private fb: FormBuilder) { }


  ngOnInit() {

    this.ProductSize = this.product.ProductSets;
    // this.ProductColor =this.product.ProductColors;
  }

  getDataChanged(quantity) {
    let totalval = 0;
    for (const value of quantity) {
      totalval = value.SellingPrice + totalval;
    }
    this.TotalPrice = totalval;
    this.product['ProductSets'] = quantity;

  }



}

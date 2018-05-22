import { Component, OnInit ,Input,ViewEncapsulation,Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from './../../../core/models/product';
import { CheckoutService } from './../../../checkout/services/checkout.service';
import { CheckoutActions } from './../../../checkout/actions/checkout.actions';
import { Store } from '@ngrx/store';
import { AppState } from './../../../interfaces';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  encapsulation: ViewEncapsulation.None 
})
export class ProductListComponent implements OnInit {
  @Input() products
    @Input('productsIds') selectedProductsIds;
    @Input('product') selectedProduct;
    @Output() productDetailEvent = new EventEmitter<string>()
  constructor(private router: Router,
            private checkoutService: CheckoutService,
            private store: Store<AppState>,
            private checkoutActions: CheckoutActions
  
  ) { 

      
  }

  ngOnInit() {
  }
  seletedproduct(product){   
    this.router.navigateByUrl('/productDetail/'+product['Document'].ProductName);
  //  this.productDetailEvent.emit(product['Document'])
  
  }

  addToCart(product: Product){ 

    const productId = product['Document'].ProductId;
    this.store.dispatch(this.checkoutActions.addToCart(productId));
  }


 

}

import { Component, OnInit, Input,ViewEncapsulation } from '@angular/core';
import { Product } from './../../../core/models/product';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../product/services/product.service';
import { Store } from '@ngrx/store';
import { CheckoutActions } from './../../../checkout/actions/checkout.actions';
import { AppState } from './../../../interfaces';

@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  actionsSubscription: Subscription;
  productInfo: Product = null;
  // routeSubs: Subscription;
  productId: any;
  images: any;
  selectedImage:any;
  constructor(private productService: ProductService,
    private route: ActivatedRoute,
    private store: Store<AppState>,
    private checkoutActions: CheckoutActions
  ) {

      this.actionsSubscription = this.route.params.subscribe(
        (params: any) => {
         // debugger;
          this.productId = params['ProductId'];
          this.productService
            .getProduct(this.productId)
            .subscribe(response => {
              this.productInfo = response;
              this.images = this.productInfo.ProductImages;
              this.selectedImage=this.productInfo.ProductImages[0];
            });
       }
      );

     }

  ngOnInit() {
  }

  addToCart() {

    const product = this.productInfo;
    this.store.dispatch(this.checkoutActions.addToCart(product));
  }

}

import { Product } from './../../core/models/product';
import { ProductActions } from './../actions/product.actions';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';

import { ProductService } from './../services/product.service';
// import { ProductDummyService } from './../../core/services/product-dummy.service';
import { Action } from '@ngrx/store';


@Injectable()
export class ProductEffects {
  constructor(private actions$: Actions,
              private productService: ProductService,
              private productActions: ProductActions) { }

  // tslint:disable-next-line:member-ordering
  @Effect()
    GetAllProducts$: Observable<Action> = this.actions$
    .ofType(ProductActions.GET_ALL_PRODUCTS)
    .switchMap((action: any) => this.productService.getProducts(action.payload))
    .map((data: any) => this.productActions.getAllProductsSuccess({products: data}));

  @Effect()
  GetAllproducttype$: Observable<Action> = this.actions$
    .ofType(ProductActions.GET_ALL_TAXONOMIES)
    .switchMap((action: any) => this.productService.getproducttype())
    .map((data: any) => this.productActions.getAllTaxonomiesSuccess({productmenu: data}));

    @Effect()
    GetFilterInfo$: Observable<Action> = this.actions$
      .ofType(ProductActions.GET_FILTER_INFO)
      .switchMap((action: any) => this.productService.getFilterInfo())
      .map((data: any) => this.productActions.getAllFilterSuccess({productFilter: data}));

  @Effect()
  GetProductDetail$: Observable<Action> = this.actions$
    .ofType(ProductActions.GET_PRODUCT_DETAIL)
    .switchMap((action: any) => this.productService.getProduct(action.payload))
    .map((data: any) => this.productActions.getProductDetailSuccess(data));
}

import { Cart } from './../../core/models/Cart';
import { Order } from './../../core/models/Order';
import { CheckoutService } from './../services/checkout.service';
import { CheckoutActions } from './../actions/checkout.actions';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Effect, Actions } from '@ngrx/effects';
import { Injectable } from '@angular/core';

@Injectable()
export class CheckoutEffects {

  constructor(private actions$: Actions,
  private checkoutService: CheckoutService,
  private actions: CheckoutActions) {}

  // tslint:disable-next-line:member-ordering
  @Effect()
    AddToCart$ = this.actions$
    .ofType(CheckoutActions.ADD_TO_CART)
    .switchMap((action: any) => {
      debugger;
      return this.checkoutService.createNewLineItem(action.payload);
    })
    .map((lineItem: Cart) => { 
       
      this.actions.addToCartSuccess(lineItem)});
  //}
  // @Effect()
  //   FetchCurrentOrder$ = this.actions$
  //   .ofType(CheckoutActions.FETCH_CURRENT_ORDER)
  //   .switchMap((action: any) => {
  //     return this.checkoutService.fetchCurrentOrder();
  //   })
  //   .map((order: Order) => {
  //     return this.actions.fetchCurrentOrderSuccess(order);
  //   });



  // Use this effect once angular releases RC4

  // @Effect()
  //   RemoveLineItem$ = this.actions$
  //   .ofType(CartActions.REMOVE_LINE_ITEM)
  //   .switchMap((action: any) => {
  //     return this.cartService.deleteLineItem(action.payload);
  //   })
  //   .map(() => this.cartActions.removeLineItemSuccess());

  }
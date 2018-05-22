import { Component, OnInit,Input } from '@angular/core';
import { getLineItems } from './../../../checkout/reducers/selectors';
import { CheckoutActions } from './../../../checkout/actions/checkout.actions';
import { AppState } from './../../../interfaces';
import { Store } from '@ngrx/store';
import { Cart } from './../../../core/models/Cart';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'line-item',
  templateUrl: './line-item.component.html',
  styleUrls: ['./line-item.component.scss']
})
export class LineItemComponent implements OnInit {


  lineItems$: Observable<Cart[]>;
  constructor(private store: Store<AppState>, private actions: CheckoutActions) {
    this.lineItems$ = this.store.select(getLineItems);
   }

  ngOnInit() {

  }

}

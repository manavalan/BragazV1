import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutEffects } from './../checkout/effects/checkout.effects';
import { CheckoutActions } from './../checkout/actions/checkout.actions';
import { CheckoutService } from './../checkout/services/checkout.service';
import { EffectsModule } from '@ngrx/effects';
import { CheckoutRoutes as routes } from './checkout-routing.module';
import { RouterModule } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { LineItemComponent } from './components/line-item/line-item.component';
import { LinelistComponent } from './components/linelist/linelist.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    EffectsModule.forRoot([
        CheckoutEffects
   
    ])
  ],
  declarations: [CartComponent, CheckoutComponent, LineItemComponent, LinelistComponent],
  providers: [CheckoutService,CheckoutActions]
})
export class CheckoutModule { }

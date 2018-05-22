// import { PaymentComponent } from './payment/payment.component';
// import { AddressComponent } from './address/address.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';

export const CheckoutRoutes = [
  // { path: cart, redirectTo: 'cart', pathMatch: 'full' },
  { path: 'viewcart', component: CartComponent },
   { path: 'checkout', component: CheckoutComponent },
  // { path: 'payment', component: PaymentComponent }
];

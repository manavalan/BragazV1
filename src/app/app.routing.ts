import { RouterModule, Routes } from '@angular/router';
import { CanActivateViaAuthGuard } from './core/guards/auth.guard';



export const routes: Routes = [
  {
    path: '',
    loadChildren: './home/home.module#HomeModule' },
  {
    path: 'checkout',
    loadChildren: './checkout/checkout.module#CheckoutModule' },
  // {
  //   path: 'user',
  //   loadChildren: './user/index#UserModule',
  //   canActivate: [ CanActivateViaAuthGuard ]
  // },
  {
   path: 'product',
    loadChildren: './product/product.module#ProductModule'
   },
   {
    path: 'search',
     loadChildren: './search/search.module#SearchModule'
    },
    {
      path: 'seller',
       loadChildren: './search/seller.module#SellerModule'
      },
  {
    path: 'auth',
    loadChildren: './auth/auth.module#AuthModule'
  }

];

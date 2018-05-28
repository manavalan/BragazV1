import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {  sellerRoutes as routes } from './seller-routing.module';
import { SellerComponent } from './components/seller/seller.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [SellerComponent]
})
export class SellerModule { }

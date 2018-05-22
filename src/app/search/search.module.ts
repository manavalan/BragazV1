import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SearchRoutes as routes } from './search-routing.module';
import { SearchActions } from './actions/search.actions';
import { SearchpageComponent } from './components/searchpage/searchpage.component';
// import { ProductComponent } from '../product/components/product/product.component';
import { SharedModule } from './../shared/shared.module';
import { ProductModule } from './../product/product.module';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,ProductModule
  ],
  declarations: [SearchpageComponent],
  providers: [SearchActions]
})
export class SearchModule { }

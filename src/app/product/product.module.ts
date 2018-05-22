import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from './../shared/shared.module';
import {  ProductRoutes as routes } from './product-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { RatingModule } from 'ngx-bootstrap';

import { FilterPipe } from './services/product.pipe';
import { StarRatingModule } from 'angular-star-rating';
import { NouisliderModule } from 'ng2-nouislider';

// Effects
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from './effects/product.effects';
import { ProductActions } from './actions/product.actions';
import { ProductService  } from './services/product.service';
import { ProductComponent } from './components/product/product.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { ProductHeaderComponent } from './components/product-header/product-header.component';
import { FilterComponent } from './components/filter/filter.component';
import { FilterSummaryComponent } from './components/filter-summary/filter-summary.component';
import { RefinerComponent } from './components/refiner/refiner.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductDescriptionComponent } from './components/product-description/product-description.component';
import { ProductImagesComponent } from './components/product-images/product-images.component';
import { ProductPriceComponent } from './components/product-price/product-price.component';
import { ProductVariantsComponent } from './components/product-variants/product-variants.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductContentComponent } from './components/product-content/product-content.component';
// import { NumberPickerComponent } from './../shared/components/number-picker/number-picker.component';

@NgModule({
  imports: [
    NouisliderModule,
    SharedModule,
    CommonModule,
    RouterModule.forChild(routes),
    EffectsModule.forRoot([
      ProductEffects  ]),
  FormsModule, 
    ReactiveFormsModule,
  StarRatingModule.forRoot()
  // RatingModule.forRoot()
  ],
  
  declarations: [ProductComponent, BreadcrumbComponent, ProductHeaderComponent, 
     FilterComponent, FilterSummaryComponent, RefinerComponent, ProductDetailComponent,
      ProductDescriptionComponent, ProductImagesComponent, ProductPriceComponent,
       ProductVariantsComponent,ProductListComponent, ProductContentComponent,FilterPipe],
  exports:      [ FilterPipe, ProductComponent],
  providers: [ProductService,ProductActions]
})
export class ProductModule { }

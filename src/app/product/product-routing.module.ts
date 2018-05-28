import { Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

// import { ProductComponent } from './product.component';

export const ProductRoutes: Routes = [
 // { path: '', component: ProductComponent, pathMatch: 'full' },
  { path: ':product/:subproduct', component: ProductComponent },
  {path: 'product/:ProductId', component: ProductDetailComponent }
];


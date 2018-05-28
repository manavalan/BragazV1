import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';



import { AppComponent } from './app.component';

import { routes } from './app.routing';

// Modules
import { SharedModule } from './shared/shared.module';
import { BuyerModule } from './buyer/buyer.module';
import { HomeModule } from './home/home.module';
import { MainModule } from './main/main.module';
import { ProductModule } from './product/product.module';
import { AuthModule } from './auth/auth.module';
import { CheckoutModule } from './checkout/checkout.module';
import { SearchModule } from './search/search.module';
import { SellerModule } from './seller/seller.module';
import { CoreModule } from './core/core.module';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './app.reducers';
// import { FilterPipe } from './product/services/product.pipe';

// adding rx operators
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/finally';
import 'rxjs/add/observable/of';

@NgModule({
  declarations: [
    AppComponent
    ],
  imports: [
       RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([]),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HomeModule,
    MainModule,
    CoreModule,
    SharedModule,
    CheckoutModule,
    ProductModule,
    AuthModule,
    SearchModule,
   SellerModule,
    // FilterPipe,
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: true // Restrict extension to log-only mode
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

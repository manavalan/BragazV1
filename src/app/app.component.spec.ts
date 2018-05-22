import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { EffectsModule } from '@ngrx/effects';
import { BrowserModule } from '@angular/platform-browser';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

import { routes } from './app.routing';
import { HttpModule } from '@angular/http';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
// Modules
import { SharedModule } from './shared/shared.module';
import { BuyerModule } from './buyer/buyer.module';
import { HomeModule } from './home/home.module';
import { MainModule } from './main/main.module';
import { ProductModule } from './product/product.module';
import { AuthModule } from './auth/auth.module';
import { CheckoutModule } from './checkout/checkout.module';
import { SearchModule } from './search/search.module';
import { CoreModule } from './core/core.module';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import { reducers, metaReducers } from './app.reducers';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: APP_BASE_HREF, useValue : '/' }
    ],
      declarations: [
        AppComponent
      ],
      imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
        StoreModule.forRoot(reducers, { metaReducers }),
        HomeModule,
        EffectsModule,
        MainModule,
        HttpModule,
        CoreModule,
        SharedModule,
        CheckoutModule,  
        ProductModule,
        BrowserModule,
        FormsModule,ReactiveFormsModule,
        AuthModule,
        SearchModule,        
        StoreDevtoolsModule.instrument({
          maxAge: 25, // Retains last 25 states
          logOnly: true // Restrict extension to log-only mode
        }) ],
     
    }).compileComponents();
    
  }));
  it('should create the app', async(() => {
 
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;   
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    debugger;
    expect(app.title).toEqual('app');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  }));
});

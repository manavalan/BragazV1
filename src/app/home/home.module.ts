import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from './../shared/shared.module';

import { HomeRoutes as routes } from './home-routing.module';
import { StoreModule } from '@ngrx/store';

import { HomeComponent } from './components/home/home.component';
import { HomeActions } from './../home/actions/home.actions';
import { HomeEffects } from './../home/effects/home.effects';
import { HomeService  } from './../home/services/home.service';
import { EffectsModule } from '@ngrx/effects';
import { SearchActions } from './../search/actions/search.actions';
// import { OwlModule } from 'ng2-owl-carousel';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
    CommonModule,
   // OwlModule,
   // StoreModule.forFeature('home', reducers),
 
   EffectsModule.forFeature([HomeEffects]),
  ],
  declarations: [ HomeComponent],
  providers: [HomeActions,HomeService,SearchActions]
})
export class HomeModule { }

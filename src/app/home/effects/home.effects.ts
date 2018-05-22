import { Home } from './../../core/models/Home';
import { HomeActions } from './../actions/home.actions';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';

import { HomeService } from './../services/home.service';
// import { ProductDummyService } from './../../core/services/product-dummy.service';
import { Action } from '@ngrx/store';


@Injectable()
export class HomeEffects {
  constructor(private actions$: Actions,
              private homeService: HomeService,
              private homeActions: HomeActions) { }

  // tslint:disable-next-line:member-ordering

  @Effect()
  GetAllHomePage$: Observable<Action> = this.actions$
  .ofType(HomeActions.GET_ALL_HOME_PAGE )
  .switchMap((action: any) => this.homeService.getHome())
  .map((data: any) =>  
  this.homeActions.getAllHomePageSuccess({homePageItem: data}));



 

}

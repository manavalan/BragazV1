import { environment } from './../environments/environment';
import * as fromProduct from './product/reducers/product.reducer';
//import * as fromUser from './user/reducers/user.reducer';
import * as fromCheckout from './checkout/reducers/checkout.reducer';
import * as fromAuth from './auth/reducers/auth.reducer';
import * as fromHome from './home/reducers/home.reducer';
import * as fromSearch from './search/reducers/search.reducer';

import { combineReducers, ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';

import { AppState as State } from './interfaces';

import { compose } from '@ngrx/core/compose';

import { storeFreeze } from 'ngrx-store-freeze';

export const reducers: ActionReducerMap<State> = {
  home:fromHome.reducer,
  products: fromProduct.reducer,
  auth: fromAuth.reducer,
  checkout: fromCheckout.reducer,
  search:fromSearch.reducer
  //users: fromUser.reducer
};

// console.log all actions
export function logger(reducer: ActionReducer<State>): ActionReducer<any, any> {
  return function(state: State, action: any): State {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? [logger]
  : [];

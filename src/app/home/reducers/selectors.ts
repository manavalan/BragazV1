import { Product } from './../../core/models/product';
import { AppState } from './../../interfaces';
import { HomeState } from '../state/home.state';
import { createSelector } from 'reselect';
import { Map, List, fromJS } from 'immutable';

// Base product state selector function
export function getHomeState(state: AppState): HomeState {
  return state.home;
}

// ******************** Individual selectors ***************************


export function fetchAllHomePage(state: HomeState) {
  return state.homePageItem.toJS();
}



// *************************** PUBLIC API's ****************************

export const getHome= createSelector(getHomeState, fetchAllHomePage);

import { AppState } from './../../interfaces';
import { createSelector } from 'reselect';
import { SearchState } from '../state/search.state';

// Base product state function
export function getSearchState(state: AppState): SearchState {
    return state.search;
  }

// ******************** Individual selectors ***************************
function fetchSelectedFilters(state: SearchState) {
    //debugger;
    return state.selectedFilters.toJS();
};

// *************************** PUBLIC API's ****************************
function fetchSelectedTaxonIds(state: SearchState) {
    return state.selectedProductsIds.toJS();
}

/******************* Public Selector API's ******************/
export const getFilters = createSelector(getSearchState, fetchSelectedFilters);
export const getSelectedTaxonIds = createSelector(getSearchState, fetchSelectedTaxonIds);

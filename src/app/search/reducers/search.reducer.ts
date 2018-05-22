import { List } from 'immutable';
import { SearchActions } from '../actions/search.actions';
import { ActionReducer, Action } from '@ngrx/store';
import { SearchState, SearchStateRecord } from '../state/search.state';

export const initialState: SearchState = new SearchStateRecord() as SearchState;

export function reducer(state = initialState, { type, payload }: any): SearchState {
  switch (type) {


    case SearchActions.ADD_FILTER:
      let filterAlreadyPresent = false;

      state.selectedFilters.forEach(filter => {
        
        const filterId = filter['ProductTagValueId'];
        if (filterId === payload.ProductTagValueId) {
          filterAlreadyPresent = true;
        }
      });

      if (filterAlreadyPresent) {
        return state;
      } else {
        const _selectedFilters = state.selectedFilters.concat([payload]);
        const _selectedProductsIds = state.selectedProductsIds.concat(payload.ProductTagValueId);
        return state.merge({
          selectedFilters: _selectedFilters,
          selectedProductsIds: _selectedProductsIds
        }) as SearchState;
      }

    case SearchActions.REMOVE_FILTER:
      let removeIndex = -1;
      state.selectedFilters.forEach((filter, index) => {
        const filterId = filter['ProductTagValueId'];
        if (filterId === payload.ProductTagValueId) {
          console.log("removeindex:" + index);

          removeIndex = index;
        }
      });
      const _selectedFilters = state.selectedFilters.remove(removeIndex);
      const taxonRemoveIndex = state.selectedProductsIds.findIndex(filterId => payload.ProductTagValueId === filterId);
      const _selectedProductsIds = state.selectedProductsIds.remove(taxonRemoveIndex);
      return state.merge({
        selectedFilters: _selectedFilters,
        selectedProductsIds: _selectedProductsIds
      }) as SearchState;

   case SearchActions.REMOVE_All_FILTER:
   const _clearAllFilters = state.selectedFilters.clear();  
   const _clearAllProductsIds = state.selectedProductsIds.clear();
   return state.merge({
     selectedFilters: _clearAllFilters,
     selectedProductsIds: _clearAllProductsIds
   }) as SearchState;
      default:
      return state;
  }
};

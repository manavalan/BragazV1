import { Product } from './../../core/models/product';
import { AppState } from './../../interfaces';
import { ProductState } from '../state/product.state';
import { createSelector } from 'reselect';
import { Map, List, fromJS } from 'immutable';

// Base product state selector function
export function getProductState(state: AppState): ProductState {
  return state.products;
}

// ******************** Individual selectors ***************************
export function fetchProducts(state: ProductState) {
  const ids = state.productIds.toJS();
  const productEntities = state.productEntities.toJS();
  return ids.map(id => productEntities[id]);
}

export function fetchAllTaxonomies(state: ProductState) { 
  //debugger;
  return state.productmenu.toJS();
}

export function fetchAllProductFilter( state:ProductState){ 
  return state.productFilter.toJS();
}

const fetchSelectedProduct = function (state: ProductState): Product {
  return state.selectedProduct;
};

// *************************** PUBLIC API's ****************************
export const getSelectedProduct = createSelector(getProductState, fetchSelectedProduct);
export const getProducts = createSelector(getProductState, fetchProducts);
export const getproducttype = createSelector(getProductState, fetchAllTaxonomies);
export const getFilterInfo= createSelector(getProductState, fetchAllProductFilter);

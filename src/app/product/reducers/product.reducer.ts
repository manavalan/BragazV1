import { ProductType } from './../../core/models/ProductType';
import { ProductFilter } from './../../core/models/ProductFilter';
import { Product } from './../../core/models/product';
import { ProductActions } from './../actions/product.actions';
import { ProductState, ProductStateRecord } from './../state/product.state';
import { Action, ActionReducer } from '@ngrx/store';

export const initialState: ProductState = new ProductStateRecord() as ProductState;

export function reducer(state = initialState, { type, payload }: any): ProductState {
  switch (type) {

    case ProductActions.GET_PRODUCT_DETAIL_SUCCESS:
      return state.merge({
        selectedProduct: payload
      }) as ProductState;

    case ProductActions.GET_ALL_PRODUCTS_SUCCESS:

      const _products: Product[] = payload.products;

      const productIds: number[] = _products.map(product => product.ProductId);

      const productEntities = _products.reduce((products: { [Productid: number]: Product },
        product: Product) => {

        return Object.assign(products, {
          [product.ProductId]: product
        });
      }, {});
      return state.merge({
        productIds: productIds,
        productEntities: productEntities
      }) as ProductState;

    case ProductActions.GET_ALL_TAXONOMIES_SUCCESS:
      const _menu: ProductType[] = payload.productmenu;
      return state.merge({
        productmenu: _menu
      }) as ProductState;

      case ProductActions.GET_FILTER_INFO_SUCCESS:
      const _filter: ProductFilter[] = payload.productFilter;
      return state.merge({
        productFilter: _filter
      }) as ProductState;

    default:
      return state;
  }
};

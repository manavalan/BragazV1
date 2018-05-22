import { ProductType } from './../../core/models/ProductType';
import { Product } from './../../core/models/product';
import { Action } from '@ngrx/store';

export class ProductActions {
    static GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS';
    static GET_ALL_PRODUCTS_SUCCESS = 'GET_ALL_PRODUCTS_SUCCESS';
    static GET_PRODUCT_DETAIL = 'GET_PRODUCT_DETAIL';
    static GET_PRODUCT_DETAIL_SUCCESS = 'GET_PRODUCT_DETAIL_SUCCESS';
    static CLEAR_SELECTED_PRODUCT = 'CLEAR_SELECTED_PRODUCT';
    static GET_ALL_TAXONOMIES = 'GET_ALL_TAXONOMIES';
    static GET_ALL_TAXONOMIES_SUCCESS = 'GET_ALL_TAXONOMIES_SUCCESS';
    static GET_FILTER_INFO= "GET_FILTER_INFO"
    static GET_FILTER_INFO_SUCCESS= "GET_FILTER_INFO_SUCCESS"

    getFilterInfo() {
        return { type: ProductActions.GET_FILTER_INFO };
    }

    getAllFilterSuccess(productFilter: any) {
        return {
            type: ProductActions.GET_FILTER_INFO_SUCCESS,
            payload: productFilter
         };
    }

    getAllProducts() {
        return { type: ProductActions.GET_ALL_PRODUCTS };
    }

    getProductDetail(id: string) {
        return {
            type: ProductActions.GET_PRODUCT_DETAIL,
            payload: id
        };
    }

    // change products type to Product[]
    getAllProductsSuccess(products: any) {
        return {
            type: ProductActions.GET_ALL_PRODUCTS_SUCCESS,
            payload: products
         };
    }

    getProductDetailSuccess(product: Product) {
        return {
            type: ProductActions.GET_PRODUCT_DETAIL_SUCCESS,
            payload: product
        };
    }

    clearSelectedProduct() {
        return { type: ProductActions.CLEAR_SELECTED_PRODUCT };
    }

    getAllproducttype() {      
        return { type: ProductActions.GET_ALL_TAXONOMIES };
    }

    getAllTaxonomiesSuccess(productmenu: any) {
        return {
            type: ProductActions.GET_ALL_TAXONOMIES_SUCCESS,
            payload: productmenu
        };
    }
}

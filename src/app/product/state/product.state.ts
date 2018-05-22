import { ProductType } from './../../core/models/ProductType';
import { ProductFilter } from './../../core/models/ProductFilter';
//import { Taxon } from './../../core/models/taxon';


import { Product } from './../../core/models/product';
import { Map, Record, List } from 'immutable';

export interface ProductState extends Map<string, any> {
  productIds: List<number>;
  productEntities: Map<number, Product>;
  selectedProductId: number;
  selectedProduct: Product;
  productmenu: List<ProductType>;
  productFilter: List<ProductFilter>;
}

export const ProductStateRecord = Record({
  productIds: List([]),
  productEntities: Map({}),
  selectedProductId: null,
  selectedProduct: Map({}),
  productmenu: List([]),
  productFilter: List([])
});

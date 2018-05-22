import { Pipe, Injectable, PipeTransform } from '@angular/core';
import { Product } from './../../core/models/product';

/**
  * Filter the products based on selected taxons in the sidebar
  * @name filter
  * @param selectedTaxonids
  */
@Pipe({
  name: 'filter'
})
@Injectable()
export class FilterPipe implements PipeTransform {
  
  transform(products: Product[], selectedProductsIds: number[]): any[] {
    
    const selectedIds = selectedProductsIds;
    if (!products) return [];
    if (!selectedIds || selectedIds.length === 0) return products;
    
    return products.filter(product => {
       
      let productPresent = false;
      selectedIds.forEach(id => {
        if (product['Document'].Filters.findIndex(SubCatagoryid => SubCatagoryid == id ) !== -1) {
          productPresent = true;
        }
      });
      return productPresent;
    });
    // console.log("Pipe");
   //     console.log(x);
  }
}
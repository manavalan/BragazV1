/** Search state
 * [{
 *   name: 'Bag',
 *   taxonId: 1
 * }, {
 *   name: 'T-shirts',
 *   taxonId: 9
 * }]
 *
*/

import { List, Record, Map } from 'immutable';

export interface SearchState extends Map<string, any> {
  selectedFilters: List<Map<string, any>>;
  selectedProductsIds: List<number>;
}

export const SearchStateRecord = Record({
  selectedFilters: List([]),
  selectedProductsIds: List([])
});

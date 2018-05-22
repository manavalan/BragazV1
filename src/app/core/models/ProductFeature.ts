import { ProductTag } from './ProductTag';
import { Product } from './Product';
import { ProductTagValue } from './ProductTagValue';
import { User } from './user';

export class ProductFeature {
    ProductFeatureId: number;
    UpdatedOn: Date;
    UpdatedBy: User;
    ProductTag: ProductTag;
    Product: Product;
    ProductTagValue: ProductTagValue;
}


import { User } from './User';
import { ProductCatagory } from './ProductCatagory';

export class ProductType {
  ProductTypeId: number;
  ProductTypeName: string;
  UpdatedOn: Date;
  UpdatedBy: User;

  ProductCatagorys: ProductCatagory[];
}

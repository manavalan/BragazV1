import { ProductTag } from './ProductTag';
import { User } from './user';

export class ProductSubCatagoryTag {
  ProductSubCatagoryTagId: string;
  UpdatedOn: Date;
  ProductTag: ProductTag;
  UpdatedBy: User;
}

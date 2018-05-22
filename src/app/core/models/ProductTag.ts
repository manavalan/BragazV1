import { User } from './User';
import { ProductTagValue } from './ProductTagValue';
export class ProductTag {
  ProductTagId: number;
  ProductTagName: string;
  IsFilter: string;
  UpdatedOn: string;
  UpdatedBy: User;
  ProductTagValue:ProductTagValue[]
}

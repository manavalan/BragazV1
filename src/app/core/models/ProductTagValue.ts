
import { User } from './User';
import { ProductTag } from './ProductTag';

export class ProductTagValue {
  ProductTagValueId: number;
  ProductTagValueName: string;
  ProductTag: string;
  UpdatedOn: string;
  UpdatedBy: User;
}


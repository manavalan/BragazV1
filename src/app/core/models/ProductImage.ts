import { Product } from './Product';
import { User } from './user';

export class ProductImage {
    ProductImageId: number;
    ImageName: string;
    ImageUrl: string;
    UpdatedOn: Date;
    UpdatedBy: User;
    ThumbUrl:string;
    Product: Product;
}

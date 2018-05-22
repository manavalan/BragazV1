import { User } from './User';
import { Product } from './Product';

export class Wishlist {
    WishListId: number;
    User: User;
    Product: Product;
    UpdatedOn: Date;
    UpdatedBy: User;
}
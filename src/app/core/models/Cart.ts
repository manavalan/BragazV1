import { User } from './user';
import { Product } from './Product';

export class Cart {
    CartId: number;
    Quantity: number;
    PricePerUnit: number;
    UpdatedOn: Date;
    Product: Product;
    User: User;
    UpdatedBy: User;
}
import { User } from './User';
import { ProductCatagory } from './ProductCatagory';

export class ProductSubCatagory {
    SubCatagoryId: number;
    SubCatagoryName: string;
    ProductCatagory: ProductCatagory;
    UpdatedOn: Date;
    UpdatedBy: User;
}
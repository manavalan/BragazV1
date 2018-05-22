import { User } from './User';
import { ProductType } from './ProductType';
import {ProductSubCatagory} from './ProductSubCatagory';


export class ProductCatagory {
    ProductCatagoryId: number;
    ProductCatagoryName: string;
    ProductType: ProductType;
    UpdatedOn: Date;
    UpdatedBy: User;

    ProductSubCatagorys: ProductSubCatagory[];
}
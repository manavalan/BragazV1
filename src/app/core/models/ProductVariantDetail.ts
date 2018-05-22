import { Product } from './Product';
import { User } from './user';
import { Variant} from './Variant';

export class ProductVariantDetail {
    ProductVariantDetailId: number;
    ProductSkuNumber:string;
    NumberOfPiecesPerSet:number;
    SellingPrice:number;
    DiscountPercentage:number;
    ActualPrice:number;
    Inventory:number;
    Variant:Variant;   
    UpdatedOn: Date;
    UpdatedBy: User;
    Product: Product;
}

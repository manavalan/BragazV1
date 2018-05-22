import { Order } from './Order';
 import { ProductVariantDetail } from './ProductVariantDetail';
import { User } from './user';

export class OrderDetail {
    OrderDetailId: number;
    Quantity: number;
    Price: string;
    UpdatedBy: User;
    Order: Order;
    ProductVariantDetail: ProductVariantDetail;
}

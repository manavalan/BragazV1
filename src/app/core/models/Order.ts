import { UserAddress } from './UserAddress';
import { OrderStatus } from './OrderStatus';
import { User } from './User';
import { Manufacturer} from './Manufacturer';
import { OrderDetail} from './OrderDetail';

export class Order {
    OrderId: number;
    OrderAmount: number;
    MobileNumber: string;
    PaidAmount: number;
    ShippingCost: number;
    PaymentDate: Date;
    GST: number;
    OrderTrackingNumber: string;
    PaymentMode: string;
    PaymentTrnNumber: string;
    UpdatedOn: Date;
    UpdatedBy: User;
    UserAddress: UserAddress;
    OrderStatus: OrderStatus;
    OrderedBy: User;
    Manufacturer:Manufacturer;
    OrderDetail:OrderDetail[];
}

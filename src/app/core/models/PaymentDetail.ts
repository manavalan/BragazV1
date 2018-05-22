import { Order } from './Order';
import { BankDetail } from './BankDetail';
import { User } from './user';

export class PaymentDetail {
    PaymentId: number;
    Method: string;
    ReferenceNumber: string;
    AmountPaid: number;
    PaidOn: Date;
    Status: string;
    UpdatedOn: Date;

    UpdatedBy: User;
    Order: Order;
    BankDetail: BankDetail;
}

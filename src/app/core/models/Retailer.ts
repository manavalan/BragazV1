import { BankDetail } from './BankDetail';
import { User } from './user';
import { UserAddress } from './UserAddress';

export class Retailer {
    RetailerId: number;

    UserAddress: UserAddress;
    UpdatedOn: Date;
    UpdatedBy: User;
    BankDetail: BankDetail;
}
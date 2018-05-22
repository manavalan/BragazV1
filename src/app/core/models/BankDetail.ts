import { User } from './user';
import { Manufacturer } from './Manufacturer';

export class BankDetail{
    BankAccountId: number;
    AccountHolderName: string;
    AccountNumber: string;
    IFSCCode: string;
    BankName: string;
    BranchName: string;
    Manufacturer: Manufacturer;
    UpdatedOn: Date;
    UpdatedBy: User;
}
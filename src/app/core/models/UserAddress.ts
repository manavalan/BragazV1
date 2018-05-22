import { User } from './user';

export class UserAddress {
  UserAddressId: number;
  AddressTitle: string;
  AddressLine1: string;
  AddressLine2: string;
  City: string;
  State: string;
  Country: string;
  Pincode: string;
  IsDefault: boolean;
  IsRegisteredAddress: boolean;
  UpdatedOn: Date;
  User: User;
  UpdatedBy: User;
}

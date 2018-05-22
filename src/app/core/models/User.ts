import { Language } from './Language';
import { UserRole } from './UserRole';

export class User {
  UserId: number;
  FirstName: string;
  LastName: string;
  FullName: string;
  MobileNo: string;
  Password: string;
  Email: string;
  UpdatedOn: Date;
  CreatedOn: Date;
  LastLogin: Date;
  Language: Language;
  UserRole: UserRole;
}

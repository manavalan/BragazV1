import { User } from './user';
import { AddressProofType } from './AddressProofType';
import { UserAddress } from './UserAddress';

export class Manufacturer {
    ManufacturerId: number;
    CompanyName: string;
    AboutCompany: string;
    AlternateMobile: string;
    CompanyUrl: string;
    CompanyLogoUrl: string;
    PanCardImageUrl: string;
    AddressProofImageUrl: string;
    CancellationChequeImageUrl: string;
    GSTIN: string;
    GSTINImageUrl: string;
    TAN: string;
    TANImageUrl: string;
    CINImageUrl: string;
    IsKycDone: boolean;
    SignatureImageUrl: string;
    UpdatedOn: Date;
    AddressProofType: AddressProofType;
    UserAddress: UserAddress;
    User: User;
    UpdatedBy: User;
}
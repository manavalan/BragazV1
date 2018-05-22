import { User } from './user';
import { VariantType } from './VariantType';

export class Variant {
    VariantId: number;
    VariantName: string;
    UpdatedOn: Date;
    UpdatedBy: User;
    VariantType:VariantType;
}

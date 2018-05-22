import { Manufacturer } from './Manufacturer';
import { User } from './user';

export class MyFavorite {
    MyFavoriteId: number;
    UpdatedOn: Date;
    UpdatedBy: User;
    Manufacturer: Manufacturer;
}

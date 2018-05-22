import { Product } from './Product';
import { User } from './user';

export class ProductReview {
    ProductReviewId: number;
    ReviewTitle: string;
    ReviewDescription: string;
    Rating: number;
    UpdatedOn: Date;
    UpdatedBy: User;
    RatedBy: User;
    Product: Product;
}

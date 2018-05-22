import { Product } from './Product';
import { User } from './User';

export class ProductQuestion {
    ProductQuestionId: number;
    Question: string;
    Answer: string;
    UpdatedOn: Date;
    UpdatedBy: User;    
    Product: Product;
    AnsweredBy:User;
    QuestionedBy:User;
}

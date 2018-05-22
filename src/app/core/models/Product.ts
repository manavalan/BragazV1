import { ProductSubCatagory } from './ProductSubCatagory';
import { Manufacturer } from './Manufacturer';
import { User } from './User';
import {ProductFeature} from './ProductFeature';
import {ProductImage} from './ProductImage';
import {ProductReview} from './ProductReview';
import {ProductVariantDetail} from './ProductVariantDetail';
import{ProductQuestion} from './ProductQuestion';
import{ProductSets} from './ProductSets';

export class Product {
  ProductId: number;
  ProductCode: string;
  ProductName: string;
  ProductDescription: string;
  ShortDescription: string;
  MinimumOrderQty: number;
  UpdatedOn: Date; 
  Rating:number;
  ActualPrice:number;
  Discount:number;
  ProductSubCatagory: ProductSubCatagory;
  Manufacturer:Manufacturer;
  UpdatedBy:User;  
  ProductFeatures:ProductFeature[];
  ProductImages:ProductImage[];
  ProductReviews:ProductReview[];
  ProductSets:ProductSets[];
  ProductQuestion:ProductQuestion[];
  Filters: number[];
}  
import { Component, OnInit ,Input} from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Product } from './../../../core/models/product';
import { ProductTag} from './../../../core/models/ProductTag';
import { ProductService } from './../../../product/services/product.service';
import { ProductActions } from './../../../product/actions/product.actions';
import { AppState } from './../../../interfaces';
import { getSelectedProduct,getProducts,getproducttype,getFilterInfo } from './../../../product/reducers/selectors';
import { getSelectedTaxonIds } from './../../../search/reducers/selectors';
import { Router, NavigationEnd,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  isProductDetail:boolean=false;
  products$: Product = null;
  actionsSubscription: Subscription;
   productName: any;
  productType$: Observable<any>;
  ProductFilter$: ProductTag=null;
 selectedProductsIds$: Observable<number[]>;
 currentUrl: number;
 productDetail:Product[]
 @Input() isSearch:boolean=false
  public breadcrumbs:string[];


  constructor(private productService: ProductService,
    private route: ActivatedRoute,
    private router:Router,
      private store: Store<AppState>,
      private actions: ProductActions,
   ) { 
    


    // this.store.dispatch(this.actions.getAllproducttype());
    // this.productType$ = this.store.select(getproducttype);
       
    }

  ngOnInit() {
    debugger
    if(!this.isSearch)
    {
    
    this.actionsSubscription = this.route.params.subscribe(
      (params: any) => {  
        let data ={
          Query: params['subproduct']   
        };    
        this.breadcrumbs=Object.values(params);
        this.productFilterCall(data)
     }
    );
  }else{
    this.actionsSubscription = this.route.queryParams.subscribe(
      (params: any) => {  
        let data ={
          Query: params['q']   
        };    
        this.breadcrumbs=Object.values(params);
        this.productFilterCall(data)
     }
    );

  }

    // this.route.params.subscribe(  (params: any) => {
    //   //console.log(Object.values(params));
    //   this.breadcrumbs=Object.values(params);
    // });
    //console.log( this.breadcrumbs);
    //this.store.dispatch(this.actions.getAllproducttype());
    
       this.selectedProductsIds$ = this.store.select(getSelectedTaxonIds);
     //  this.store.dispatch(this.actions.getAllProducts());
      // this.products$ = this.store.select(getProducts); 
      //  this.store.dispatch(this.actions.getFilterInfo());
      // this.ProductFilter$=this.store.select(getFilterInfo)


  //   this.router
  //     .events
  //     .filter(e => e instanceof NavigationEnd)
  //     .subscribe((e: NavigationEnd) => {
  //       this.currentUrl = e.url.indexOf("productDetail");
  //       if(this.currentUrl>0)
  //       {
  //        this.isProductDetail=true;
  //       }
  //        else
  //        {  this.isProductDetail=false;}
      
  //       window.scrollTo(0, 0);
  //     });
  }


 productFilterCall(data){

  this.productService
  .getProducts(data)
  .subscribe(res => {          
    this.products$ = res.Data.Products;
    this.ProductFilter$=res.Data.Filters;
    // console.log("searchInfo");
    // console.log(res);
  
  });
 }

 receiveProduct($event) {
    // console.log("Product==>");
    // console.log($event);
   // this.productDetail=$event;
  }

}

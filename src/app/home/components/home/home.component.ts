import { Component, OnInit ,ChangeDetectionStrategy} from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { AppState } from '../../../interfaces';
import { Router } from '@angular/router';
import { HomeActions } from './../../../home/actions/home.actions';
import {  getHome } from './../../../home/reducers/selectors';


import { ProductActions } from './../../../product/actions/product.actions';
import { Product } from './../../../core/models/product';
import { getproducttype,getProducts} from './../../../product/reducers/selectors';
import { getAuthStatus ,getRegAuthStatus} from '../../../auth/reducers/selectors';
import { AuthActions } from '../../../auth/actions/auth.actions';

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  homePage$: Observable<any>;
  // productType$: Observable<any>;
  // products$: Observable<any>;
  isAuthenticated: Observable<boolean>;
  isRegister: Observable<boolean>;
  constructor(private store: Store<AppState>,
     private actions: HomeActions,
     private productactions: ProductActions, 
     private authActions: AuthActions,
     private router: Router) {

    this.store.dispatch(this.actions.getAllHomePage());
    this.homePage$ = this.store.select(getHome);
   

   }

  ngOnInit() {
    //this.store.dispatch(this.authActions.authorize());
    this.isAuthenticated = this.store.select(getAuthStatus);
    console.log(this.isAuthenticated)
    this.isRegister = this.store.select(getRegAuthStatus);
    console.log(this.isRegister)
 
  }

  ngAfterViewChecked() {
  
    $('.product-slider').owlCarousel({
      navigation: true, // Show next and prev buttons
      slideSpeed: 300,
      paginationSpeed: 400,
      autoWidth:false,
      afterInit: function() {
          $('.product-slider .item').css('visibility', 'visible');
        
      }
        });

        $('#main-slider').owlCarousel({
          navigation: true, // Show next and prev buttons
          slideSpeed: 300,
          paginationSpeed: 400,
          autoPlay: true,
          stopOnHover: true,
          singleItem: true,
          afterInit: ''
            });
    
  }

   

}

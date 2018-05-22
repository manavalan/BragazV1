import { Component, OnInit ,Input} from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthActions } from '../../auth/actions/auth.actions';
import { getAuthStatus, getRegAuthStatus } from '../../auth/reducers/selectors';
import { Observable } from 'rxjs/Observable';
import { AppState } from '../../interfaces';
import { ProductActions } from './../../product/actions/product.actions';
import { ProductService } from './../../product/services/product.service';
import { SearchActions } from './../../search/actions/search.actions';

@Component({
  selector: 'checkout-header',
  templateUrl: './checkout-header.component.html',
  styleUrls: ['./checkout-header.component.scss']
})
export class CheckoutHeaderComponent implements OnInit {
  //@Input() currentStep: string;
  private checkoutStep = ['viewcart', 'checkout'];
  isAuthenticated: Observable<boolean>;
  searchValue: string;
  isviewCart:boolean=true;
  constructor(private router: Router,  
    private store: Store<AppState>,
    private productService: ProductService,
    private authActions: AuthActions,
    private actions: ProductActions,
    private searchActions: SearchActions,
    ) { }

  ngOnInit() {
 
    this.isAuthenticated = this.store.select(getAuthStatus);
 
  }




  searchEngine() {
    this.router.navigate(['/search'], { queryParams: { q:this.searchValue } })
  }

}

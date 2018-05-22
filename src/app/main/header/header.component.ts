import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { AppState } from '../../interfaces';
import { Router } from '@angular/router';
// import { AuthService } from '../../auth/services/auth.service';
import { AuthActions } from '../../auth/actions/auth.actions';
import { getAuthStatus, getRegAuthStatus } from '../../auth/reducers/selectors';
import { getproducttype, getProducts } from './../../product/reducers/selectors';
import { ProductActions } from './../../product/actions/product.actions';
import { ProductService } from './../../product/services/product.service';

import { SearchActions } from './../../search/actions/search.actions';
// import { BsModalService } from 'ngx-bootstrap/modal';
// import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { getTotalCartItems } from './../../checkout/reducers/selectors';
// import { LoginComponent } from '../../auth/components/login/login.component';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  isAuthenticated: Observable<boolean>;
  // isRegister: Observable<boolean>;
  totalCartItems: Observable<number>;
  productType$: Observable<any>;
  isLogedInUser: boolean = false;
  selected: any;
  seletedState: any;
  searchValue: string;

  // bsModalRef: BsModalRef;
  constructor(
    private store: Store<AppState>,
    private productService: ProductService,
    private authActions: AuthActions,
    private actions: ProductActions,
    private searchActions: SearchActions,
    private router: Router,
    // private modalService: BsModalService
  ) {
    this.store.dispatch(this.actions.getAllproducttype());
    this.productType$ = this.store.select(getproducttype);


  }

  ngOnInit() {


    this.totalCartItems = this.store.select(getTotalCartItems);
    this.isAuthenticated = this.store.select(getAuthStatus);
    // this.isRegister = this.store.select(getRegAuthStatus);
  }

  searchEngine() {
    this.router.navigate(['/search'], { queryParams: { q:this.searchValue } })
  }

  select(item) {
    this.selected = (this.selected === item ? null : item);

  }
  isActive(item) {
    return this.selected === item;
  }


  selectProduct(typeName, product) {

    // this.router.navigateByUrl('/' + typeName+'/'+product.SubCategoryName);

    // if (this.seletedState) {
    //   this.store.dispatch(this.searchActions.removeFilter(this.seletedState));
    //   this.seletedState = [];
    //   this.store.dispatch(this.searchActions.addFilter(product));
    // }

    // else {
    //   this.store.dispatch(this.searchActions.addFilter(product));
    //   this.seletedState = product

    // }

    let data = {
      Query: product.SubCategoryName
    };
    this.productService.getProducts(product).subscribe(data => {

      console.log(data)
    });

  }
}

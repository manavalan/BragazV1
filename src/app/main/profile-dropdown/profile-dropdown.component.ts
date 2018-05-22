import { Component, OnInit,Input } from '@angular/core';
import { AuthService } from './../../auth/services/auth.service';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { LoginComponent } from '../../auth/components/login/login.component';
import { Store } from '@ngrx/store';
import { AuthActions } from '../../auth/actions/auth.actions';
import { AppState } from '../../interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-dropdown',
  templateUrl: './profile-dropdown.component.html',
  styleUrls: ['./profile-dropdown.component.scss']
})
export class ProfileDropdownComponent implements OnInit {
  @Input() isAuthenticated: boolean;
  @Input() totalCartItems:number;
  @Input() viewCart:boolean =false;

  bsModalRef: BsModalRef
  constructor(   private authService: AuthService,
    private modalService: BsModalService,
    private actions: AuthActions,
    private store: Store<AppState>,
    private router: Router,
    ) { }

  ngOnInit() {
  }

  openModalWithComponent(){
    // debugger;   
    this.bsModalRef = this.modalService.show(LoginComponent,Object.assign({}, { class: 'bragazModal modal-sm' }));
    this.bsModalRef.content.closeBtnName = 'Close';

  }

  logout() {
   // this.authService.logout()

    localStorage.removeItem('user');
    this.store.dispatch(this.actions.logoutSuccess());
    this.router.navigate(['/']);
  }
}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { AppState } from '../../../interfaces';
import { Router, ActivatedRoute } from '@angular/router';
import { getRegAuthStatus,getAuthStatus } from '../../reducers/selectors';
import { Subscription } from 'rxjs/Subscription';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  signInForm: FormGroup;
  loginSubs: Subscription;
  returnUrl: string;
  isBusinessUser: boolean;
  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    public bsModalRef: BsModalRef
  ) {   // this.redirectIfUserLoggedIn(); 
  }

  ngOnInit() {
    this.initForm();
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    console.log("ReturnUrl");
    console.log( this.returnUrl);

    this.store.select(getAuthStatus).subscribe(
      data => {

        this.isBusinessUser=data;
      }

    );

  }

  onSubmit() {
    const values = this.signInForm.value;
    console.log(values);
    const keys = Object.keys(values);

    if (this.signInForm.valid) {
      this.loginSubs = this.authService.login(values).subscribe(data => {
        const error = data.error;
        if (error) {
          keys.forEach(val => {
            this.pushErrorFor(val, error);
          });
        }else{ 
          this.redirectIfUserLoggedIn();
        }
      });
    } else {
      keys.forEach(val => {
        const ctrl = this.signInForm.controls[val];
        if (!ctrl.valid) {
          this.pushErrorFor(val, null);
          ctrl.markAsTouched();
        };
      });
    }
  }

  private pushErrorFor(ctrl_name: string, msg: string) {
    this.signInForm.controls[ctrl_name].setErrors({'msg': msg});
  }

  initForm() {
    const username = '';
    const password = '';

    this.signInForm = this.fb.group({
      'username': [username, Validators.required],
      'password': [password, Validators.required]
    });
  }


  redirectIfUserLoggedIn() {   
    this.store.select(getRegAuthStatus).subscribe(
      data => {
        if (data === true) {
          this.bsModalRef.hide()
          if(!this.isBusinessUser )
          {
           // console.log("Business");
            this.router.navigateByUrl("/businessInfo");
          } else{
            this.router.navigate([this.returnUrl]);
          }
            }
      }
    );
  }
  ngOnDestroy() {
    if (this.loginSubs) { this.loginSubs.unsubscribe(); }
  }

}

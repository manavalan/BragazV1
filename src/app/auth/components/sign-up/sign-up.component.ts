import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../../interfaces';
import { Router ,ActivatedRoute} from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';
import { getAuthStatus, getRegAuthStatus } from '../../reducers/selectors';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit, OnDestroy {
  // public GstNo = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
  // phone = ['(', /[1-9]/, /[1-9]/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  signUpForm: FormGroup;
  formSubmit = false;
  registerSubs: Subscription;
  unamePattern = "^[a-z0-9 _.,-]{8,15}$";
  pwdPattern = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,12}$";
  mobnumPattern = "^((\\+91-?)|0)?[0-9]{10}$";
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  errorState: string[];
  errormessage:string;
  loginSubs: Subscription;
  returnUrl: string;
  isBusinessUser: boolean;
  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>,
    private router: Router,
    private authService: AuthService,
    private route: ActivatedRoute

  ) {
    this.redirectIfUserLoggedIn();
  }

  ngOnInit() {
    this.initForm();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    this.store.select(getAuthStatus).subscribe(
      data => {

        this.isBusinessUser=data;
      }

    );
  }
  redirectIfUserLoggedIn() {
    this.store.select(getRegAuthStatus).subscribe(
      data => {
        if (data === true) {
         // this.bsModalRef.hide()
          if(!this.isBusinessUser )
          {
            console.log("Business");
            this.router.navigateByUrl("/businessInfo");
          } else{
            this.router.navigate([this.returnUrl]);
          }
            }
      }
    );
  }
  initForm() {
    const Name = '';
    const Email = '';
    const Password = '';
    const ConfirmPassword = '';
    const PhoneNumber = '';
    // const GstNo = '';
    const OTP = '';


    this.signUpForm = this.fb.group({
      'Name': [Name, Validators.compose([Validators.pattern(this.unamePattern)])],
      'Email': [Email, Validators.compose([Validators.pattern(this.emailPattern)])],
      'Password': [Password, Validators.compose([Validators.required,
      Validators.minLength(6), Validators.pattern(this.pwdPattern)])],
      'ConfirmPassword': [ConfirmPassword, Validators.compose([Validators.required, Validators.minLength(6)])],
      'PhoneNumber': [PhoneNumber, Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(10),
      Validators.pattern(this.mobnumPattern)])],
      'OTP': [OTP, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(5), Validators.pattern('[0-9]{5}')])],
    }, { validator: this.matchingPasswords('Password', 'ConfirmPassword') }
    );
  }
  matchingPasswords(passwordKey: string, confirmPasswordKey: string) {
    return (group: FormGroup): { [key: string]: any } => {
      let password = group.controls[passwordKey];
      let confirmPassword = group.controls[confirmPasswordKey];

      if (password.value !== confirmPassword.value) {
        return {
          mismatchedPasswords: true
        };
      }
    }
  }

  onSubmit() {
    const values = this.signUpForm.value;
    const keys = Object.keys(values);
    this.formSubmit = true;

    if (this.signUpForm.valid) {
      this.registerSubs = this.authService.register(values).subscribe(data => {
        if (data.ModelState ||data.Message ) {
          if(data.ModelState){ this.errorState =  data.ModelState[""];}
          if(data.Message) {this.errormessage =data.Message}
        }
        else {
          let data = {
            username: values.PhoneNumber,
            password: values.Password,
            grant_type: 'password'
          }

          this.loginSubs = this.authService.login(data).subscribe(data => {
            console.log("Login info");
            console.log(data.access_token);
            if(data.access_token)
            {
              this.redirectIfUserLoggedIn();
            }

          });
        }
      });
    } else {
      keys.forEach(val => {
        const ctrl = this.signUpForm.controls[val];
        if (!ctrl.valid) {
          this.pushErrorFor(val, null);
          ctrl.markAsTouched();
        };
      });
    }
  }

  private pushErrorFor(ctrl_name: string, msg: string) {
    this.signUpForm.controls[ctrl_name].setErrors({ 'msg': msg });
  }
  ngOnDestroy() {
    if (this.registerSubs) { this.registerSubs.unsubscribe(); }
    if (this.loginSubs) { this.loginSubs.unsubscribe(); }
  }

}

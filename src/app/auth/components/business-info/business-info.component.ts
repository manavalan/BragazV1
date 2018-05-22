import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators ,FormArray} from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../../interfaces';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';
import { getAuthStatus, getRegAuthStatus } from '../../reducers/selectors';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'business-info',
  templateUrl: './business-info.component.html',
  styleUrls: ['./business-info.component.scss']
})
export class BusinessInfoComponent implements OnInit,OnDestroy {

  public BusinessForm: FormGroup;
  GSTPattern="^([0][1-9]|[1-2][0-9]|[3][0-5])([a-zA-Z]{5}[0-9]{4}[a-zA-Z]{1}[1-9a-zA-Z]{1}[zZ]{1}[0-9a-zA-Z]{1})+$"
  Retailer: Subscription;
  disableAddress:boolean =true;
    constructor(
    private fb: FormBuilder,
    private store: Store<AppState>,
    private router: Router,
    private authService: AuthService ) {
     }

  ngOnInit() {   
   const BusinessName = '';
   const GSTIN = '';
   const GSTINImageUrl = '';
   this.BusinessForm = this.fb.group({     
    'BusinessName': [BusinessName,  Validators.compose([Validators.required])],
    'GSTIN': [GSTIN, Validators.compose([Validators.required, Validators.pattern(this.GSTPattern)])],
    'GSTINImageUrl':[GSTINImageUrl],
    'UserAddress': this.fb.array([])

   
});

this.BusinessForm.controls.UserAddress.disable();
//this.addAddress();

  }

  isValidForm() {
    return this.disableAddress;

  }
  redirectIfBusinessUserLoggedIn(){

    this.store.select(getAuthStatus).subscribe(
      data => {
        if (data === true) {
           this.router.navigateByUrl('/'); 
         }
      }
    );
  }

  

initAddress() {
  const AddressTitle = '';
  const AddressLine1 = '';
  const AddressLine2 = ''; 
  const Pincode = ''; 
  const City = ''; 
  const State = '';
  return this.fb.group({        
      'AddressTitle': [AddressTitle, Validators.compose([Validators.required])],
       'AddressLine1': [AddressLine1, Validators.compose([Validators.required])],
          'AddressLine2': [AddressLine2],
           'Pincode': [Pincode, Validators.compose([Validators.required])],
            'City': [City],
           'State': [State],
  });
}

addAddress() {
  this.BusinessForm.controls.UserAddress.enable();
  this.disableAddress=false;
    const control = <FormArray>this.BusinessForm.controls['UserAddress'];
    const addrCtrl = this.initAddress();    
    control.push(addrCtrl);
    

}



  ngOnDestroy() {
    if (this.Retailer) { this.Retailer.unsubscribe(); }
  }
  onSubmit(){
    //const values = this.BusinessForm.value;
    console.log(this.BusinessForm.value);
    const values={
      
      BusinessName:this.BusinessForm.value.BusinessName,
      GSTIN:this.BusinessForm.value.GSTIN,
      GSTINImageUrl:this.BusinessForm.value.GSTINImageUrl,
      UserAddress: this.BusinessForm.value.UserAddress ==null?null:this.BusinessForm.value.UserAddress[0],
    
    
    }

   
    const keys = Object.keys(values);

    if (this.BusinessForm.valid) {
      this.Retailer = this.authService.RetailerSvc(values).subscribe(data => {
        const error = data.error;
        if (error) {
          keys.forEach(val => {
            this.pushErrorFor(val, error);
          });
        }else{ 
          this.redirectIfBusinessUserLoggedIn();
        }
      });
    } else {
      keys.forEach(val => {
        const ctrl = this.BusinessForm.controls[val];
        if (!ctrl.valid) {
          this.pushErrorFor(val, null);
          ctrl.markAsTouched();
        };
      });
    }

  }

  private pushErrorFor(ctrl_name: string, msg: string) {
    this.BusinessForm.controls[ctrl_name].setErrors({'msg': msg});
  }

}

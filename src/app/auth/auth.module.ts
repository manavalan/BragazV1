import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TextMaskModule } from 'angular2-text-mask';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';

import { AuthRoutes as routes  } from './auth-routing.module';
import { SharedModule } from './../shared/shared.module';

import { SignUpComponent } from './components/sign-up/sign-up.component';
import { BusinessInfoComponent } from './components/business-info/business-info.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),TextMaskModule,
    FormsModule,ReactiveFormsModule ,
    SharedModule
  ],
  declarations: [SignUpComponent, BusinessInfoComponent]
})
export class AuthModule { }

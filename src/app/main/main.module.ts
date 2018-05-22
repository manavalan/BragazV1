import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CheckoutHeaderComponent } from './checkout-header/checkout-header.component';
import { LoginComponent } from '../auth/components/login/login.component';
import { BsDropdownModule } from 'ngx-bootstrap';

// Modules
import { SharedModule } from '../shared/shared.module';
import { ModalModule } from 'ngx-bootstrap';
import { ProfileDropdownComponent } from './profile-dropdown/profile-dropdown.component';

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule,ModalModule.forRoot(),
    BsDropdownModule.forRoot()
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    CheckoutHeaderComponent,
    LoginComponent,ProfileDropdownComponent
  ],
  declarations: [
    HeaderComponent,
    LoginComponent,
    FooterComponent,
    CheckoutHeaderComponent,
    ProfileDropdownComponent],    
    entryComponents: [
      LoginComponent
    ]
})
export class MainModule { }

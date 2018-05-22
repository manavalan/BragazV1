import { SignUpComponent } from './components/sign-up/sign-up.component';
import { BusinessInfoComponent } from './components/business-info/business-info.component';
import { Routes } from '@angular/router';

export const AuthRoutes :Routes = [
 
  { path: 'signup', component: SignUpComponent },
  { path: 'businessInfo', component: BusinessInfoComponent } 
];

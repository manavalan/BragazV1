import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Pipes
import { KeysPipe } from './pipes/keys.pipes';
import { HumanizePipe } from '../core/pipes/civilize.pipe';

// components
import { NotificationComponent } from './components/notification/notification.component';
import { LoaderComponent } from './components/loader/loader.component';
// imports
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NumberPickerComponent } from './components/number-picker/number-picker.component';
import { AddressComponent } from './components/address/address.component';


@NgModule({
  declarations: [
    // components
    LoaderComponent,
      NotificationComponent,
    // pipes
    KeysPipe,
    HumanizePipe,
    NumberPickerComponent,
    AddressComponent,
   
  ],
  exports: [
    // components
    LoaderComponent,
    NotificationComponent,
    NumberPickerComponent,
    AddressComponent,
    // modules
    CommonModule,
    BsDropdownModule,
    FormsModule,
    ReactiveFormsModule,
    // pipes
    KeysPipe,
    HumanizePipe
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    BsDropdownModule.forRoot()
  ]
})
export class SharedModule {}

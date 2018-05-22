import { Component, OnInit, Input} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  moduleId: module.id,
  selector: 'address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {
  // @Input() addressInfo;
 
  // public adressForm: FormGroup;

  @Input('addressInfo')
  public adressForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {   }

}

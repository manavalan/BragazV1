import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
// import { ProductSize } from './../../../core/models/ProductSize';

@Component({
  selector: 'app-number-picker',
  templateUrl: './number-picker.component.html',
  styleUrls: ['./number-picker.component.scss']
})
export class NumberPickerComponent implements OnInit {
  @Input() objectProps;
  @Input() min: number;
  @Input() max: number;
  @Input() step: number;
  @Input() precision: number;
  @Input() inputDisabled: boolean;
  @Output() getDataObjEvent: EventEmitter<number> = new EventEmitter();
  @Input().group values;
  form: FormGroup;
  currentPrice: any = null;
  private numberPicker: FormControl;
  sizeData: any;
  constructor() { }

  ngOnInit() {

    const x = this.objectProps;
    this.sizeData =
      Object.keys(x)
        .map(res => {
          return Object.assign({}, { key: res }, x[res]);
        });

    if (this.inputDisabled == null) {
      this.inputDisabled = false;
    }
    if (this.min == null) {
      this.min = 0;
    }
    if (this.max == null) {
      this.max = 100;
    }
    if (this.precision == null) {
      this.precision = 1;
    }
    if (this.step == null) {
      this.step = 1;
    }


    const formGroup = {};

    for (let prop = 0; prop < x.length; prop++) {
      formGroup[prop] = new FormControl({ value: x[prop].MoQ == null ? 0 : x[prop].MoQ, disabled: this.inputDisabled });

    }

    this.form = new FormGroup(formGroup);
    this.getDataObjEvent.emit(this.sizeData);
  }

  private increaseValue(currentValue): void {
    let currentItem = currentValue.MoQ;
    if (currentItem < this.max) {

      currentItem = currentItem + this.step;
      if (this.precision != null) {
        currentItem = this.round(currentItem, this.precision);
      }

      if (this.currentPrice == null) {
        this.currentPrice = this.sizeData[currentValue.key].SellingPrice;
      }

      const price = currentItem * this.currentPrice;

      this.sizeData[currentValue.key].SellingPrice = price;
      this.form.controls[currentValue.key].patchValue(currentItem);
      this.sizeData[currentValue.key].MoQ = currentItem;
      this.getDataObjEvent.emit(this.sizeData);
    }
  }

  private decreaseValue(currentValue): void {
    // currentValue = {
    //   MoQ: 0
    // };
    let currentItem = currentValue.MoQ;
    if (currentItem > this.min) {
      currentItem = currentItem - this.step;
      if (this.precision != null) {
        currentItem = this.round(currentItem, this.precision);
      }
      if (this.currentPrice == null) {
        this.currentPrice = this.sizeData[currentValue.key].SellingPrice;
      }
      let itemVal;
      if (currentItem ==0){ itemVal=1} else{
        itemVal=currentItem;
      }
      const price = itemVal * this.currentPrice;
      this.sizeData[currentValue.key].SellingPrice = price;

      this.form.controls[currentValue.key].patchValue(currentItem);
      this.sizeData[currentValue.key].MoQ = currentItem;
      this.getDataObjEvent.emit(this.sizeData);
    }
  }

  private round(value: number, precision: number): number {
    const multiplier: number = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
  }
}

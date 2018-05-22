import { Component, OnInit ,Input,Output, EventEmitter} from '@angular/core';
import { Product } from './../../../core/models/product';
@Component({
  selector: 'product-content',
  templateUrl: './product-content.component.html',
  styleUrls: ['./product-content.component.scss']
})
export class ProductContentComponent implements OnInit {
  @Input() products: Product[]; 
  @Input() productsIds;
//  @Output() productDetailEvent = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  
  }
 
  // receiveproduct($event) {
    
  //   this.productDetailEvent.emit($event)
  // }
}

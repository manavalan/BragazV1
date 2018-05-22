import { Component, OnInit ,Input} from '@angular/core';
import { ProductImage } from './../../../core/models/ProductImage';
import { environment } from './../../../../environments/environment';

@Component({
  selector: 'product-images',
  templateUrl: './product-images.component.html',
  styleUrls: ['./product-images.component.scss']
})
export class ProductImagesComponent implements OnInit {
  @Input() images: ProductImage[] = null;
  @Input() selectedImage: ProductImage = null;
  constructor() { }

  ngOnInit() {
  }

  getProductImageUrl(url) {
    return environment.API_IMAGEURL + url;
  }

  onMouseOver(image: ProductImage) {
    this.selectedImage = image;
  }

}

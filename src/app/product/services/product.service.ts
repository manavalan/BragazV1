import { Observable } from 'rxjs/Observable';
import { HttpService } from '../../core/services/http';
import { Injectable } from '@angular/core';



@Injectable()
export class ProductService {

  constructor(private http: HttpService) { }

  /**
   *
   *
   * @param {string} id
   * @returns {Observable<any>}
   *
   * @memberof ProductService
   */
  getProduct(id: string): Observable<any> {
    return this.http.get(`api/Products/${id}`)
    .map(res => res.json());
  }
/**
   *
   *
   * @returns {*}
   *
   * @memberof ProductMenu
   */
  getFilterInfo(): any {
       return this.http.get(`api/productFilter`)
    .map(res => res.json());
  }

  /**
   *
   *
   * @returns {*}
   *
   * @memberof ProductService
   */
  getproducttype(): any {
    return this.http.get(`api/GetMenu`)
 .map(res => res.json());
}



  /**
   *
   *
   * @returns {*}
   *
   * @memberof ProductService
   */
  getProducts(data): Observable<any> {
    return this.http.post(
      `api/search`,data).map((res: Response) => {
        data = res.json();
        return data;
  });
}

}

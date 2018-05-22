import { Observable } from 'rxjs/Observable';
import { HttpService } from '../../core/services/http';
import { Injectable } from '@angular/core';

@Injectable()
export class HomeService {

  /**
   * Creates an instance of HomeService.
   * @param {HttpService} http
   *
   * @memberof HomeService
   */
  constructor(private http: HttpService) { }

    /**
   *
   *
   * @returns {*}
   *
   * @memberof HomeService
   */
  getHome(): any {    
    return this.http.get(`api/GetHome`)
    .map(res => res.json());
  }

  
}

import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/Observable';
import {Http, Headers, Response, RequestOptions} from "@angular/http";
import { HttpService } from '../../core/services/http';
import { AppState } from '../../interfaces';
import { Store } from '@ngrx/store';
import { AuthActions } from '../../auth/actions/auth.actions';

@Injectable()
export class AuthService {

  /**
   * Creates an instance of AuthService.
   * @param {HttpService} http
   * @param {AuthActions} actions
   * @param {Store<AppState>} store
   *
   * @memberof AuthService
   */
  constructor(
    private http: HttpService,
    private actions: AuthActions,
    private store: Store<AppState>,
    private _http:Http
  ) {

  }

  /**
   *
   *
   * @param {any} data
   * @returns {Observable<any>}
   *
   * @memberof AuthService
   */
  login(data): Observable<any> {
    let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    let options = new RequestOptions({headers: headers});
    return this._http.post(
      'http://bragazapp.azurewebsites.net/token',   "username=" + encodeURIComponent(data.username) +
      "&password=" + encodeURIComponent(data.password) +
      "&grant_type=password",options).map((res: Response) => {
   
      data = res.json();
      if (!data.error) {
        // Setting token after login
        this.setTokenInLocalStorage(data);
       // this.store.dispatch(this.actions.loginSuccess());
       this.store.dispatch(this.actions.registerSuccess());
      } else {
        this.http.loading.next({
          loading: false,
          hasError: true,
          hasMsg: 'Please enter valid Credentials'
        });
      }
      return data;
    });
  
  }

  /**
   *
   *
   * @param {any} data
   * @returns {Observable<any>}
   *
   * @memberof AuthService
   */
  RetailerSvc(data): Observable<any> {
    return this.http.post(
      'api/Retailers',data).map((res: Response) => {
   
      data = res.json();
      if (!data.error) {
        // Setting token after login
       // this.setTokenInLocalStorage(data);
       this.store.dispatch(this.actions.loginSuccess());
     //  this.store.dispatch(this.actions.registerSuccess());
      } 
      return data;
    });
  
  }



  /**
   *
   *
   * @param {any} data
   * @returns {Observable<any>}
   *
   * @memberof AuthService
   */
  register(data): Observable<any> {
    return this.http.post(
      'api/account/Register',data).map((res: Response) => {
    //  data = res.json();
     // console.log(data);
      if (res.status==200) {        // Setting token after login
    //  this.setTokenInLocalStorage(res.json());
         //this.store.dispatch(this.actions.registerSuccess());
      } else {
        this.http.loading.next({
          loading: false,
          hasError: true,
          hasMsg: res.json().message
        });
      }
      return res.json();
    });
  
  }

  /**
   *
   *
   * @returns {Observable<any>}
   *
   * @memberof AuthService
   */
  authorized(): Observable<any> {
    return this.http
      .get('spree/api/v1/users')
      .map((res: Response) => res.json());
    // catch should be handled here with the http observable
    // so that only the inner obs dies and not the effect Observable
    // otherwise no further login requests will be fired
    // MORE INFO https://youtu.be/3LKMwkuK0ZE?t=24m29s
  }

  /**
   *
   *
   * @returns
   *
   * @memberof AuthService
   */
  logout() {
    // return this.http.get('spree/logout.json')
    //   .map((res: Response) => {
    //     // Setting token after login
    //     localStorage.removeItem('user');
    //     this.store.dispatch(this.actions.logoutSuccess());
    //     return res.json();
    //   });

     localStorage.removeItem('user');
        this.store.dispatch(this.actions.logoutSuccess());
  }

  /**
   *
   *
   * @private
   * @param {any} user_data
   *
   * @memberof AuthService
   */
  private setTokenInLocalStorage(user_data): void {
    const jsonData = JSON.stringify(user_data);
    localStorage.setItem('user', jsonData);
  }
}

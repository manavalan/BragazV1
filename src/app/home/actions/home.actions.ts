
import { Home } from './../../core/models/Home';
import { Action } from '@ngrx/store';

export class HomeActions {
    static GET_ALL_HOME_PAGE = 'GET_ALL_HOME_PAGE';
    static GET_ALL_HOME_PAGE_SUCCESS = 'GET_ALL_HOME_PAGE_SUCCESS';


    getAllHomePage() {
        return { type: HomeActions.GET_ALL_HOME_PAGE };
    }

  

    // change products type to Product[]
    getAllHomePageSuccess(homePageItem: any) {
        return {
            type: HomeActions.GET_ALL_HOME_PAGE_SUCCESS,
            payload: homePageItem
         };
    }

 


  
}

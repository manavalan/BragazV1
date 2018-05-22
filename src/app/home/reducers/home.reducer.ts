import { Home } from './../../core/models/Home';
import * as fromRoot from '../../interfaces';
import { HomeState,HomeStateRecord } from '../state/home.state';
//import * as fromSearch from '../reducers/home.reducer';
import { HomeActions } from './../actions/home.actions';


export const initialState: HomeState = new HomeStateRecord() as HomeState;

// export interface State extends fromRoot.AppState {
//   'home': HomeState;
// }


export function reducer(state = initialState, { type, payload }: any): HomeState {
    switch (type) {
        case HomeActions.GET_ALL_HOME_PAGE_SUCCESS:
        const _homePageItem: Home[] = payload.homePageItem;
        return state.merge({
            homePageItem: _homePageItem
        }) as HomeState;
        
        default:
        return state;
    }
};


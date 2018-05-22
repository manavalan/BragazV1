import { List, Record, Map } from 'immutable';
import { Home } from './../../core/models/Home';
export interface HomeState extends Map<string, any> {  
  homePageItem: List<Home>;
  Advertisment: List<Map<string, any>>;
}

export const HomeStateRecord = Record({
  homePageItem: List([]),
  Advertisment: List([])
});
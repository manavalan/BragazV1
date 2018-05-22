import { Map, Record } from 'immutable';

export interface AuthState extends Map<string, any> {
  isAuthenticated: boolean;
  isRegister:boolean;
}

export const AuthStateRecord = Record({
  isAuthenticated: false,
  isRegister:false
});

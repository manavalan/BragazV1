import { AppState } from './../../interfaces';
import { createSelector } from 'reselect';
import { AuthState } from '../state/auth.state';

// Base product state function
function getAuthState(state: AppState): AuthState {
    return state.auth;
}

// ******************** Individual selectors ***************************
const fetchAuthStatus = function(state: AuthState): boolean {
    return state.isAuthenticated;
}
const fetchRegAuthStatus = function(state: AuthState): boolean {
    return state.isRegister;
}

// *************************** PUBLIC API's ****************************
export const getAuthStatus = createSelector(getAuthState, fetchAuthStatus);
export const getRegAuthStatus = createSelector(getAuthState, fetchRegAuthStatus);

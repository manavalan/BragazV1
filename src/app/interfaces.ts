import { ProductState } from './product/state/product.state';
import { HomeState } from './home/state/home.state';
import { AuthState } from './auth/state/auth.state';
// import { UserState } from './user/state/user.state';
 import { CheckoutState } from './checkout/state/checkout.state';
import { SearchState } from './search/state/search.state';
// import { ManufatureState } from './manufature/state/search.state';

// This should hold the AppState interface
// Ideally importing all the substate for the application

/**
 *
 *
 * @export
 * @interface AppState
 */
export interface AppState {
    home:HomeState;
    products: ProductState;
    auth: AuthState;
    checkout: CheckoutState;
    search:SearchState;
   // users: UserState;
   // manufature:ManufatureState;
  }
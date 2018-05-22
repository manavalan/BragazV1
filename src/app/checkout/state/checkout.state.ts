import { UserAddress } from './../../core/models/UserAddress';
import { Cart } from './../../core/models/Cart';
import { Map, Record, List, fromJS } from 'immutable';

export interface CheckoutState extends Map<string, any> {
  orderNumber: number;
  orderState: string;
  lineItemIds: List<number>;
  lineItemEntities: Map<number, Cart>;
  totalCartItems: number;
  totalCartValue: number;
  billAddress: any;
  shipAddress: any;
}

export const CheckoutStateRecord = Record({
  orderNumber: null,
  orderState: null,
  lineItemIds: List([]),
  lineItemEntities: Map({}),
  totalCartItems: 0,
  totalCartValue: 0,
  billAddress: fromJS({}),
  shipAddress: fromJS({})
});

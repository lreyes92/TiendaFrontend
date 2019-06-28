import { Shipping } from './shipping.model';
import { Cart } from './cart.model';

export class Pay{
  id:number;
  cart:Cart[];
  card:number;
  shippingInfo:Shipping;
}

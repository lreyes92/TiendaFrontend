import { Injectable } from '@angular/core';
import { Cart } from '../entities/cart.model';
import { HttpClient } from '@angular/common/http';



@Injectable()
export class CartService {
 cart:Cart[];

 constructor(private http: HttpClient) { }


 addItemToCart(cart:Cart){
   this.cart.push(cart);
 }

 getCart(){
   return this.cart;
 }
}

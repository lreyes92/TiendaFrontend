import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Cart } from '../entities/cart.model';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

@Input() cart:Cart[];
@Output() total:EventEmitter<number> = new EventEmitter<number>();

  constructor(private cartService:CartService) { }

  ngOnInit() {
    this.getCart();
    // this.total.emit(this.getTotalCart());
  }
  //
  // remove(itemRemovable:number){
  //   this.cart.items=this.cart.items.filter(item => item.id !== itemRemovable);
  //   this.total.emit(this.getTotalCart());
  // }


  getCart(){
    this.cartService.getCart();
  }
}

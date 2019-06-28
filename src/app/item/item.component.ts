import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Item } from '../entities/item.model';
import { Router } from '@angular/router';
import { CartService } from '../cart/cart.service';
import { Cart } from '../entities/cart.model';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

@Input() item : Item;
@Output () delete:EventEmitter<number> = new EventEmitter<number>();
@Output () update:EventEmitter<Item> = new EventEmitter<Item>();
@Output () addCart:EventEmitter<Item> = new EventEmitter<Item>();
@Output () addToCart:EventEmitter<Item> = new EventEmitter<Item>();

  constructor(private router: Router, private cartService:CartService) { }

  ngOnInit() {

  }

  addQuantity(event) {
    if (event.stock > 0) {
      event.quantity++;
      event.stock--;
    }
  }
  reduceQuantity(event) {
    if (event.quantity > 0) {
      event.quantity--;
      event.stock++;
    }
  }

  showKey(event){
    console.log(event.key);
    console.log(event);
  }
  getCoord(event){
    console.log(event.x+':'+event.y);
  }

  updateItem(){
    this.update.emit(this.item);
  }

  deleteItem() {
    this.delete.emit(this.item.id);
  }

  navigateToItem() {
    this.router.navigate(['/item', this.item.id]);
  }

  addItemToCart(cart:Cart){
    this.cartService.addItemToCart(cart);
    console.log("añadido");
    console.log(this.cartService.cart);

  }

}

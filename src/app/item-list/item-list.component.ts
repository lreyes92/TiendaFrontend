import { Component, OnInit} from '@angular/core';
import { Item } from '../entities/item.model';
import { ItemListService } from './item-list.service';
import { Router } from '@angular/router';
import { CartService } from '../cart/cart.service';
import { Cart } from '../entities/cart.model';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  item:Item;
  myItems: Item[];


  constructor(private itemListService:ItemListService, private router: Router, private cartService:CartService) { }

  ngOnInit() {
    this.callItems();

  }


  totalItems(): number {
    // let total:number=0;
    // for(let item of this.myItems){
    //   total=total+item.stock;
    //return total;
    // }
    if( this.myItems !== undefined)
    return this.myItems.reduce((prev, item) => prev + item.stock, 0);

  }


   updateItem(item:Item){
     this.itemListService.updateItem(item).subscribe(
       ()=>this.callItems()
     );
   }

  callItems(){
    this.itemListService.getItemList()
      .subscribe( (data:Item[])=>this.myItems=data,
                  error=>console.error(error),
                  () => console.log('My item list is loaded')
    );
  }

   deleteItem(id: number) {
     this.itemListService.deleteItem(id).subscribe(
       ()=>this.callItems()
    );
   }

  addItem(item:Item){
    this.itemListService.addItem(item).subscribe(
      ()=>this.callItems()
    );
  }

  addItemToCart(cart:Cart){
    this.cartService.addItemToCart(cart);
  }

  goCart() {
    this.router.navigate(['/cart']);
  }
}

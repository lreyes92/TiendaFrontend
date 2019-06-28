import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from '../entities/cart.model';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  cart:Cart;
  total=0;
  ordered:boolean;

  constructor(private cartService:CartService, private router: Router) { }

  ngOnInit() {
    this.cart= this.cartService.cart;
    this.ordered= false;
  }


  goHome(){
      this.router.navigate(['/home']);
  }

  updateTotal(total){
    this.total=total;
  }
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { TotalPipe } from './total.pipe';
import { PriceTotalPipe } from './price-total.pipe';
import { ItemListComponent } from './item-list/item-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ItemListService } from './item-list/item-list.service';
import {HttpClientModule} from '@angular/common/http';
import { AddFormComponent } from './add-form/add-form.component';
import { ItemComponent } from './item/item.component';
import { routing } from './app-routing.module';
import { EditItemComponent } from './edit-item/edit-item.component';
import { OrderComponent } from './order/order.component';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';
import { CartService } from './cart/cart.service';


@NgModule({
  declarations: [
    AppComponent,
    TotalPipe,
    PriceTotalPipe,
    ItemListComponent,
    NavbarComponent,
    AddFormComponent,
    ItemComponent,
    EditItemComponent,
    OrderComponent,
    CartComponent,
    ShippingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing,
    ReactiveFormsModule
  ],
  providers: [ItemListService,CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }

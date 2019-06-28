import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, Router, ActivatedRoute } from '@angular/router';
import { AddFormComponent } from './add-form/add-form.component';
import { ItemListComponent } from './item-list/item-list.component';
import { EditItemComponent } from './edit-item/edit-item.component';
import { OrderComponent } from './order/order.component';


const rutas: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  { path: 'home', component: ItemListComponent },
  { path: 'addForm', component: AddFormComponent },
  { path: 'item/:id', component: EditItemComponent },
  { path: 'cart', component: OrderComponent }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(rutas);
// @NgModule({
//   imports: [RouterModule.forRoot(rutas)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule {
//
//   // constructor(private service:ItemListService, private route: ActivatedRoute, private router:Router){}
//   //
//   // ngOnInit(){
//   //   this.route.params.subscribe(params => {
//   //     const id = <string>params['id'];
//   //     if(id !=null){
//   //
//   //     }
//   //   })
//   // }
//
//
//
//
// }

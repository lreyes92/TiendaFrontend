import { Component, OnInit } from '@angular/core';
import { ItemListService } from '../item-list/item-list.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from '../entities/item.model';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {
   item:Item;


  constructor(private service:ItemListService, private route: ActivatedRoute, private router:Router){}

  ngOnInit(){
    this.route.params.subscribe(params =>{
      const id = <number>params['id'];
      if(id != null){
        this.service.getItemById(id)
        .subscribe( (data:Item) => this.item = data,
        error => console.error(error),
        () => console.log('My item list is loaded!'))
      }
    })
  }

   updateItem(item:Item){
     this.service.updateItem(item).subscribe(
       () => this.router.navigate(['/home'])
     )
   }

}

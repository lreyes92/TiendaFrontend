import { Component, OnInit } from '@angular/core';
import { ItemListService } from '../item-list/item-list.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {

  constructor(private service:ItemListService, private route: ActivatedRoute, private router:Router){}

   ngOnInit(){
     
     this.route.params.subscribe(params => {
       const id = <string>params['id'];
       if(id !=null){

       }
     })
   }

}

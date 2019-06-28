import {Item} from '../entities/item.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


const httpOptions={
  headers:new HttpHeaders({
    'Content-Type':'application/json',
    'Authorization':'my-auth-token'
  })
};
const URL_BASE= 'http://localhost:3000/item-list';


@Injectable()
export class ItemListService{

  constructor(private http:HttpClient){}

  getItemList(){
    return this.http.get(URL_BASE);
  }

  getItemById(id:number){
    return this.http.get(URL_BASE+'/'+id);
  }

  updateItem(item:Item):Observable<Item>{
    const url=`${URL_BASE}/${item.id}`;
    return this.http.put<Item>(url ,item ,httpOptions);
  }

  deleteItem(id:number){
    const url=`${URL_BASE}/${id}`;
    return this.http.delete(url, httpOptions);
  }


  addItem(item:Item):Observable<Item>{
    const url=`${URL_BASE}`;
    return this.http.post<Item>(url ,item ,httpOptions);
  }


}

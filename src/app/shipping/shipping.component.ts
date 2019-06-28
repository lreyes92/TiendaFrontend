import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {


  form:FormGroup;

  name=new FormControl("", Validators.required);

  constructor(fb:FormBuilder){
    this.form=fb.group({
      "name":this.name,
      "address":["", Validators.required],
      "email":["", Validators.required]
    });
  }

  ngOnInit(){

  }

  onSubmitModelBased(){
    console.log("model-based form submitted");
    console.log(this.form);
  }

}

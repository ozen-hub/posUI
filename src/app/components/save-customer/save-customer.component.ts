import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-save-customer',
  templateUrl: './save-customer.component.html',
  styleUrls: ['./save-customer.component.scss']
})
export class SaveCustomerComponent implements OnInit {

  saveForm= new FormGroup({
    id: new FormControl(null,[Validators.required]),
    name: new FormControl(null,[Validators.required]),
    address: new FormControl(null,[Validators.required]),
    salary: new FormControl(null,[Validators.required])
  })

  constructor() { }

  ngOnInit(): void {
  }

  saveCustomer(){

  }

}

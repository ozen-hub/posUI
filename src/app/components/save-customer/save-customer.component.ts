import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerService} from "../../service/customer.service";
import {CustomerDTO} from "../../dto/CustomerDTO";

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

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
  }

  saveCustomer(){
    let customer = new CustomerDTO(
      this.saveForm.get('id')?.value,
      this.saveForm.get('name')?.value,
      this.saveForm.get('address')?.value,
      Number(this.saveForm.get('salary')?.value)
    );
    this.customerService.saveCustomer(customer).subscribe(response=>{
      console.log(response);
      this.saveForm.patchValue({
        id:null,
        name:null,
        address:null,
        salary:null,
      })
    }, error => {
      console.log(error);
    })
  }

}

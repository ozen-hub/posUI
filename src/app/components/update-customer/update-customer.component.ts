import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerService} from "../../service/customer.service";
import {CustomerDTO} from "../../dto/CustomerDTO";

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.scss']
})
export class UpdateCustomerComponent implements OnInit {

  updateForm= new FormGroup({
    id: new FormControl(null,[Validators.required]),
    name: new FormControl(null,[Validators.required]),
    address: new FormControl(null,[Validators.required]),
    salary: new FormControl(null,[Validators.required])
  })

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
  }

  updateCustomer(){
    let customer = new CustomerDTO(
      this.updateForm.get('id')?.value,
      this.updateForm.get('name')?.value,
      this.updateForm.get('address')?.value,
      Number(this.updateForm.get('salary')?.value)
    );
    this.customerService.updateCustomer(customer).subscribe(response=>{
      console.log(response);
      this.updateForm.patchValue({
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

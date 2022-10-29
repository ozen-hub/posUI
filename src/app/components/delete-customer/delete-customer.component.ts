import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerService} from "../../service/customer.service";

@Component({
  selector: 'app-delete-customer',
  templateUrl: './delete-customer.component.html',
  styleUrls: ['./delete-customer.component.scss']
})
export class DeleteCustomerComponent implements OnInit {


  getForm= new FormGroup({
    id: new FormControl(null,[Validators.required]),
    name: new FormControl(null,[Validators.required]),
    address: new FormControl(null,[Validators.required]),
    salary: new FormControl(null,[Validators.required])
  })

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
  }

  getCustomer(){
    this.customerService.getCustomer(this.getForm.get('id')?.value).subscribe(response=>{
      if(response.data!=null){
        this.getForm.patchValue({
          name:response.data.name,
          address:response.data.address,
          salary:response.data.salary
        })
      }else{
        alert('empty result')
      }
    }, error => {
      console.log(error);
    })
  }


  deleteCustomer() {
    this.customerService.deleteCustomer(this.getForm.get('id')?.value).subscribe(response=>{
        this.getForm.reset();
    }, error => {
      console.log(error);
    })
  }
}

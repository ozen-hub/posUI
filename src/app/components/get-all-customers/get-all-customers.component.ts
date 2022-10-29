import { Component, OnInit } from '@angular/core';
import {CustomerService} from "../../service/customer.service";

@Component({
  selector: 'app-get-all-customers',
  templateUrl: './get-all-customers.component.html',
  styleUrls: ['./get-all-customers.component.scss']
})
export class GetAllCustomersComponent implements OnInit {

  data:any[]=[];

  constructor(private service: CustomerService) { }

  ngOnInit(): void {
    this.loadAllData();
  }

  private loadAllData() {
    this.service.loadCustomers(1,1,'').subscribe(response=>{
      this.data = response.data.list;
    })
  }

}

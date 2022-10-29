import { Injectable } from '@angular/core';
import {CustomerDTO} from "../dto/CustomerDTO";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import * as http from "http";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }
  saveCustomer(customer:CustomerDTO):Observable<any>{
    return this.http.post('http://localhost:8080/api/v1/customer',{
      id:customer.id,
      name:customer.name,
      address:customer.address,
      salary:customer.salary,
    })
  }
  updateCustomer(customer:CustomerDTO):Observable<any>{
    return this.http.put('http://localhost:8080/api/v1/customer',{
      id:customer.id,
      name:customer.name,
      address:customer.address,
      salary:customer.salary,
    })
  }
}

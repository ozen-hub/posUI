import { Injectable } from '@angular/core';
import {CustomerDTO} from "../dto/CustomerDTO";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import * as http from "http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
url=environment.baseUrl;
  constructor(private http: HttpClient) { }
  saveCustomer(customer:CustomerDTO):Observable<any>{
    return this.http.post(this.url+'customer',{
      id:customer.id,
      name:customer.name,
      address:customer.address,
      salary:customer.salary,
    })
  }
  updateCustomer(customer:CustomerDTO):Observable<any>{
    return this.http.put(this.url+'customer',{
      id:customer.id,
      name:customer.name,
      address:customer.address,
      salary:customer.salary,
    })
  }
  getCustomer(id: any):Observable<any>{
    return this.http.get('customer/'+id);
  }
  deleteCustomer(id: any):Observable<any>{
    return this.http.delete(this.url+'customer?id='+id);
  }
  loadCustomers(page:number,size:number,text:string):Observable<any>{
    return this.http.get(this.url+'customer/list?page='+page
      +'&size='+size+'&searchText='+text);
  }
}

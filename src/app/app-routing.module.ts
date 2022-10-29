import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SaveCustomerComponent} from "./components/save-customer/save-customer.component";
import {GetAllCustomersComponent} from "./components/get-all-customers/get-all-customers.component";
import {UpdateCustomerComponent} from "./components/update-customer/update-customer.component";
import {GetCustomerComponent} from "./components/get-customer/get-customer.component";
import {DeleteCustomerComponent} from "./components/delete-customer/delete-customer.component";

const routes: Routes = [
  {path:'', redirectTo:'/save', pathMatch:'full'},
  {path:'save', component:SaveCustomerComponent},
  {path:'delete', component:DeleteCustomerComponent},
  {path:'get', component:GetCustomerComponent},
  {path:'update', component:UpdateCustomerComponent},
  {path:'get-all', component:GetAllCustomersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SaveCustomerComponent } from './components/save-customer/save-customer.component';
import { GetCustomerComponent } from './components/get-customer/get-customer.component';
import { DeleteCustomerComponent } from './components/delete-customer/delete-customer.component';
import { UpdateCustomerComponent } from './components/update-customer/update-customer.component';
import { GetAllCustomersComponent } from './components/get-all-customers/get-all-customers.component';

@NgModule({
  declarations: [
    AppComponent,
    SaveCustomerComponent,
    GetCustomerComponent,
    DeleteCustomerComponent,
    UpdateCustomerComponent,
    GetAllCustomersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

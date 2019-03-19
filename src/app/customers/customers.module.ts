import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { CustomeeInvoiceComponent } from './customee-invoice/customee-invoice.component';
import { CustamerProductComponent } from './custamer-product/custamer-product.component';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { AlertModule } from 'ngx-bootstrap/alert';
@NgModule({
  imports: [
    CommonModule,
    CustomersRoutingModule,
    AccordionModule.forRoot(),
    AlertModule.forRoot()
  ],
  declarations: [CustomerListComponent, CustomerDashboardComponent, CustomeeInvoiceComponent, CustamerProductComponent]
})
export class CustomersModule { }

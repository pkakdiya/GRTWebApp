import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomerDetailsRoutingModule } from './customer-details/customer-details.routing';
import { AgGridModule } from 'ag-grid-angular';
import { EditButtonComponent } from './edit-button/edit-button.component';

@NgModule({
  declarations: [CustomerDetailsComponent, EditButtonComponent],
  imports: [
    AgGridModule.withComponents([
      EditButtonComponent
    ]),
    CustomerDetailsRoutingModule,
    CommonModule
  ]
})
export class CustomerDetailsModule { }

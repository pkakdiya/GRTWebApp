import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {FormsModule,Validators} from '@angular/forms';
import { InquirycomponentRoutingModule } from './inquirycomponent-routing.module';
import { InquirycomponentComponent } from './inquirycomponent.component';


@NgModule({
  declarations: [InquirycomponentComponent],
  imports: [
    CommonModule,
    InquirycomponentRoutingModule,
    FormsModule
  ]
})
export class InquirycomponentModule { }

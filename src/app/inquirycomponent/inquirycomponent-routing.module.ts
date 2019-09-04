import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InquirycomponentComponent} from './inquirycomponent.component';



const routes: Routes = [
  {
    path:'',component:InquirycomponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InquirycomponentRoutingModule { }

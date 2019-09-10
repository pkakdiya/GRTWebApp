import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 
 
const routes: Routes = [
  {
    path:"",
    loadChildren:'../app/homecomponent/homecomponent.module#HomecomponentModule'
  },
  {
    path:"About",
    loadChildren:'../app/aboutcomponent/aboutcomponent.module#AboutcomponentModule'
  },
  {
    path:"Work",
    loadChildren:'../app/workcomponent/workcomponent.module#WorkcomponentModule'
  },
  {
    path:"Contact",
    loadChildren:'../app/contactcomponent/contactcomponent.module#ContactcomponentModule'
  },
  {
    path:"Inquiry",
    loadChildren:'../app/inquirycomponent/inquirycomponent.module#InquirycomponentModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

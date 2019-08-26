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
    path:"Service",
    loadChildren:'../app/servicecomponent/servicecomponent.module#ServicecomponentModule'
  },
  {
    path:"Blog",
    loadChildren:'../app/blogcomponent/blogcomponent.module#BlogcomponentModule'
  },
  {
    path:"Contact",
    loadChildren:'../app/contactcomponent/contactcomponent.module#ContactcomponentModule'
  },
  {
    path:"Admin",
    loadChildren:'../app/admincomponent/admincomponent.module#AdmincomponentModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

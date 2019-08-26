import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutcomponentComponent } from './aboutcomponent.component';
 
const routes: Routes = [
  { path:"", component: AboutcomponentComponent }
];
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutcomponentRoutingModule { }

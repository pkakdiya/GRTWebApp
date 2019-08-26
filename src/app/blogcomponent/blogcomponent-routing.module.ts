import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BlogcomponentComponent} from './blogcomponent.component';


const routes: Routes = [
  { path:"", component: BlogcomponentComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogcomponentRoutingModule { }

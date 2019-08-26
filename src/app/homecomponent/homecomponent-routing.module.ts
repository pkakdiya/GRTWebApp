import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomecomponentComponent } from "./homecomponent.component";

const routes: Routes = [
  { path:"", component: HomecomponentComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomecomponentRoutingModule { }

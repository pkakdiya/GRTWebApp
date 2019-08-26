import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkcomponentComponent } from './workcomponent.component';
 
const routes: Routes = [
  { path:"", component: WorkcomponentComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkcomponentRoutingModule { }

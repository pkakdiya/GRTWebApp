import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServicecomponentComponent } from './servicecomponent.component';
 
const routes: Routes = [
  { path:"", component: ServicecomponentComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicecomponentRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContactcomponentComponent} from './contactcomponent.component';
  import { from } from 'rxjs';

const routes: Routes = [
  {path:'',component:ContactcomponentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactcomponentRoutingModule { }

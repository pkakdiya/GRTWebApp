import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdmincomponentRoutingModule } from './admincomponent-routing.module';
import { AdmincomponentComponent } from './admincomponent.component';
import { LogincomponentComponent } from './logincomponent/logincomponent.component';


@NgModule({
  declarations: [AdmincomponentComponent, LogincomponentComponent],
  imports: [
    CommonModule,
    AdmincomponentRoutingModule
  ]
})
export class AdmincomponentModule { }

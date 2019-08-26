import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicecomponentRoutingModule } from './servicecomponent-routing.module';
import { ServicecomponentComponent } from './servicecomponent.component';


@NgModule({
  declarations: [ServicecomponentComponent],
  imports: [
    CommonModule,
    ServicecomponentRoutingModule
  ]
})
export class ServicecomponentModule { }

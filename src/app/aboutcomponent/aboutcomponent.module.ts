import { NgModule } from '@angular/core';
import {AboutcomponentComponent} from './aboutcomponent.component';
import { AboutcomponentRoutingModule } from './aboutcomponent-routing.module';


@NgModule({ 
  declarations: [AboutcomponentComponent],
  imports: [
    AboutcomponentRoutingModule
  ]
})
export class AboutcomponentModule { }

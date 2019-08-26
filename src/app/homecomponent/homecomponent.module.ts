import { NgModule } from '@angular/core';
import { HomecomponentComponent } from './homecomponent.component';
import { HomecomponentRoutingModule } from './homecomponent-routing.module';


@NgModule({
  declarations: [HomecomponentComponent],
  imports: [
    HomecomponentRoutingModule
  ]
})
export class HomecomponentModule { }

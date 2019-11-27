import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, Validators } from '@angular/forms';
import { ContactcomponentRoutingModule } from './contactcomponent-routing.module';
import { ContactcomponentComponent } from './contactcomponent.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [ContactcomponentComponent],
  imports: [
    CommonModule,
    ContactcomponentRoutingModule,
    HttpClientModule,
    FormsModule
  ]
})
export class ContactcomponentModule { }

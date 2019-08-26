import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BlogcomponentRoutingModule } from './blogcomponent-routing.module';
import { BlogcomponentComponent } from './blogcomponent.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [BlogcomponentComponent],
  imports: [
    CommonModule,
    BlogcomponentRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class BlogcomponentModule { }

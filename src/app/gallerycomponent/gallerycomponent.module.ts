import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GallerycomponentRoutingModule } from './gallerycomponent-routing.module';
import { GallerycomponentComponent } from './gallerycomponent.component';


@NgModule({
  declarations: [GallerycomponentComponent],
  imports: [
    CommonModule,
    GallerycomponentRoutingModule
  ]
})
export class GallerycomponentModule { }

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GallerycomponentComponent } from './gallerycomponent.component';

describe('GallerycomponentComponent', () => {
  let component: GallerycomponentComponent;
  let fixture: ComponentFixture<GallerycomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GallerycomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GallerycomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

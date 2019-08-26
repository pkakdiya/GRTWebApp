import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactcomponentComponent } from './contactcomponent.component';

describe('ContactcomponentComponent', () => {
  let component: ContactcomponentComponent;
  let fixture: ComponentFixture<ContactcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

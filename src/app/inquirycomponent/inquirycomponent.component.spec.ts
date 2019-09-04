import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InquirycomponentComponent } from './inquirycomponent.component';

describe('InquirycomponentComponent', () => {
  let component: InquirycomponentComponent;
  let fixture: ComponentFixture<InquirycomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InquirycomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InquirycomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

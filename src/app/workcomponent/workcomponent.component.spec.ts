import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkcomponentComponent } from './workcomponent.component';

describe('WorkcomponentComponent', () => {
  let component: WorkcomponentComponent;
  let fixture: ComponentFixture<WorkcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

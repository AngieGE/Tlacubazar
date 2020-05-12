import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorCourseComponent } from './vendor-course.component';

describe('VendorCourseComponent', () => {
  let component: VendorCourseComponent;
  let fixture: ComponentFixture<VendorCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

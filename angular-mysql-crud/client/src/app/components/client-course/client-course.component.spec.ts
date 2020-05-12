import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientCourseComponent } from './client-course.component';

describe('ClientCourseComponent', () => {
  let component: ClientCourseComponent;
  let fixture: ComponentFixture<ClientCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

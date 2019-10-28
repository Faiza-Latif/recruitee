import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewsPage } from './interviews.page';

describe('InterviewsPage', () => {
  let component: InterviewsPage;
  let fixture: ComponentFixture<InterviewsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterviewsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterviewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

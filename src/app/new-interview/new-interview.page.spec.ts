import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewInterviewPage } from './new-interview.page';

describe('NewInterviewPage', () => {
  let component: NewInterviewPage;
  let fixture: ComponentFixture<NewInterviewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewInterviewPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewInterviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

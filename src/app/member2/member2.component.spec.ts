import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Member2Component } from './member2.component';

describe('Member2Component', () => {
  let component: Member2Component;
  let fixture: ComponentFixture<Member2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Member2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Member2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

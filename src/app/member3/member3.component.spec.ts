import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Member3Component } from './member3.component';

describe('Member3Component', () => {
  let component: Member3Component;
  let fixture: ComponentFixture<Member3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Member3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Member3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

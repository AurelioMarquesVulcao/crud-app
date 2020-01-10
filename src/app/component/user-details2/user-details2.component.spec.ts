import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetails2Component } from './user-details2.component';

describe('UserDetails2Component', () => {
  let component: UserDetails2Component;
  let fixture: ComponentFixture<UserDetails2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDetails2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetails2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

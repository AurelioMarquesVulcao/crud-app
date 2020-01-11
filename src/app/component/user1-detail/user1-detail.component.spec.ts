import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { User1DetailComponent } from './user1-detail.component';

describe('User1DetailComponent', () => {
  let component: User1DetailComponent;
  let fixture: ComponentFixture<User1DetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ User1DetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(User1DetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

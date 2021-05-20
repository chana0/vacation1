import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeownerLoginPageComponent } from './homeowner-login-page.component';

describe('HomeownerLoginPageComponent', () => {
  let component: HomeownerLoginPageComponent;
  let fixture: ComponentFixture<HomeownerLoginPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeownerLoginPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeownerLoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

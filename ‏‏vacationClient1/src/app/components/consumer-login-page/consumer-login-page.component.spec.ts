import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumerLoginPageComponent } from './consumer-login-page.component';

describe('ConsumerLoginPageComponent', () => {
  let component: ConsumerLoginPageComponent;
  let fixture: ComponentFixture<ConsumerLoginPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsumerLoginPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumerLoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

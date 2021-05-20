import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewHomeownerPageComponent } from './new-homeowner-page.component';

describe('NewHomeownerPageComponent', () => {
  let component: NewHomeownerPageComponent;
  let fixture: ComponentFixture<NewHomeownerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewHomeownerPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewHomeownerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

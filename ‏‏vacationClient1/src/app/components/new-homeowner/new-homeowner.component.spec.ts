import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewHomeownerComponent } from './new-homeowner.component';

describe('NewHomeownerComponent', () => {
  let component: NewHomeownerComponent;
  let fixture: ComponentFixture<NewHomeownerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewHomeownerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewHomeownerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

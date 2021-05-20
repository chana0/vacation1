import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessfulInsertOfHomeownerComponent } from './successful-insert-of-homeowner.component';

describe('SuccessfulInsertOfHomeownerComponent', () => {
  let component: SuccessfulInsertOfHomeownerComponent;
  let fixture: ComponentFixture<SuccessfulInsertOfHomeownerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessfulInsertOfHomeownerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessfulInsertOfHomeownerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

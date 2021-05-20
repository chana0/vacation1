import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogInterestInTheApartmentComponent } from './dialog-interest-in-the-apartment.component';

describe('DialogInterestInTheApartmentComponent', () => {
  let component: DialogInterestInTheApartmentComponent;
  let fixture: ComponentFixture<DialogInterestInTheApartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogInterestInTheApartmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogInterestInTheApartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

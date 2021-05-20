import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumerOrdersDisplayComponent } from './consumer-orders-display.component';

describe('ConsumerOrdersDisplayComponent', () => {
  let component: ConsumerOrdersDisplayComponent;
  let fixture: ComponentFixture<ConsumerOrdersDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsumerOrdersDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumerOrdersDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

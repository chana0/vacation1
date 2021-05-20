import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewConsumerPageComponent } from './new-consumer-page.component';

describe('NewConsumerPageComponent', () => {
  let component: NewConsumerPageComponent;
  let fixture: ComponentFixture<NewConsumerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewConsumerPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewConsumerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

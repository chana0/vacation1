import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessfulInsertOfConsumerComponent } from './successful-insert-of-consumer.component';

describe('SuccessfulInsertOfConsumerComponent', () => {
  let component: SuccessfulInsertOfConsumerComponent;
  let fixture: ComponentFixture<SuccessfulInsertOfConsumerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessfulInsertOfConsumerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessfulInsertOfConsumerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

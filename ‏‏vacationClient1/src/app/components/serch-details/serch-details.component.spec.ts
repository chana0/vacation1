import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerchDetailsComponent } from './serch-details.component';

describe('SerchDetailsComponent', () => {
  let component: SerchDetailsComponent;
  let fixture: ComponentFixture<SerchDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SerchDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SerchDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

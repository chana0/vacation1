import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeownerShowPageComponent } from './homeowner-show-page.component';

describe('HomeownerShowPageComponent', () => {
  let component: HomeownerShowPageComponent;
  let fixture: ComponentFixture<HomeownerShowPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeownerShowPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeownerShowPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

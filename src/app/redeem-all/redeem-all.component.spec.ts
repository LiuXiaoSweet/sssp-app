import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedeemAllComponent } from './redeem-all.component';

describe('RedeemAllComponent', () => {
  let component: RedeemAllComponent;
  let fixture: ComponentFixture<RedeemAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedeemAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedeemAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedeemCoinComponent } from './redeem-coin.component';

describe('RedeemCoinComponent', () => {
  let component: RedeemCoinComponent;
  let fixture: ComponentFixture<RedeemCoinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedeemCoinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedeemCoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

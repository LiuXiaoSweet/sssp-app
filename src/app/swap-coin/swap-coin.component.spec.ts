import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwapCoinComponent } from './swap-coin.component';

describe('SwapCoinComponent', () => {
  let component: SwapCoinComponent;
  let fixture: ComponentFixture<SwapCoinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwapCoinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwapCoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeRatePageComponent } from './exchange-rate-page.component';

describe('GreetingPageComponent', () => {
  let component: ExchangeRatePageComponent;
  let fixture: ComponentFixture<ExchangeRatePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExchangeRatePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExchangeRatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

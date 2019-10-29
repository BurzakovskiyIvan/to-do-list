import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExchangeRatePageComponent } from './components/exchange-rate-page/exchange-rate-page.component';
import { ExchangeRateRoutingModule } from './exchange-rate-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ExchangeRatePageComponent
  ],
  imports: [
    CommonModule,
    ExchangeRateRoutingModule,
    SharedModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class ExchangeRateModule { }

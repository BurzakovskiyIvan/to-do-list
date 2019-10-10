import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GreetingPageComponent } from './components/greeting-page/greeting-page.component';
import { ExchangeRateRoutingModule } from './exchange-rate-routing.module';

@NgModule({
  declarations: [
    GreetingPageComponent
  ],
  imports: [
    CommonModule,
    ExchangeRateRoutingModule
  ]
})
export class ExchangeRateModule { }

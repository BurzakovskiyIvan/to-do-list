import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExchangeRateComponent } from './components/exchange-rate/exchange-rate.component';
import { ExchangeRateRoutingModule } from './exchange-rate-routing.module';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    ExchangeRateComponent
  ],
  imports: [
    CommonModule,
    ExchangeRateRoutingModule,
    MatTableModule
  ]
})
export class ExchangeRateModule { }

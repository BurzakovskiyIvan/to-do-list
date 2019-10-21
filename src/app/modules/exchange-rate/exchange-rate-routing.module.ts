import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExchangeRatePageComponent } from './components/exchange-rate-page/exchange-rate-page.component';

const routes: Routes = [
  { path: '', component: ExchangeRatePageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExchangeRateRoutingModule { }

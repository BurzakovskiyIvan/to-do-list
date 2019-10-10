import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GreetingPageComponent } from './components/greeting-page/greeting-page.component';

const routes: Routes = [
  { path: '', component: GreetingPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExchangeRateRoutingModule { }

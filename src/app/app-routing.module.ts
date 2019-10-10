import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '',
    loadChildren: () => import('./modules/to-do-list/to-do-list.module').then(m => m.ToDoListModule) },

  { path: 'exchange-rate',
    loadChildren: () => import('./modules/exchange-rate/exchange-rate.module').then(m => m.ExchangeRateModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

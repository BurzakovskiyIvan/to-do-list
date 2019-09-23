import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { ToDoPageComponent } from './components/to-do-page/to-do-page.component';

const routes: Routes = [
  { path: '', component: ToDoPageComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToDoListRoutingModule { }

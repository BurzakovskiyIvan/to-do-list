import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToDoPageComponent } from './components/to-do-page/to-do-page.component';


const routes: Routes = [
  { path: '', component: ToDoPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToDoListRoutingModule { }

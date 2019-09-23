import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  // Path is empty because there is only one page in the project
  { path: '', loadChildren: () => import('./modules/to-do-list/to-do-list.module').then(m => m.ToDoListModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

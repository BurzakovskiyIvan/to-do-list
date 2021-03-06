import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

import { ToDoPageComponent } from './components/to-do-page/to-do-page.component';
import { ToDoFormComponent } from './components/to-do-form/to-do-form.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskComponent } from './components/task/task.component';
import { TasksService } from './services/tasks.service';
import { ToDoListRoutingModule } from './to-do-list-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ToDoListRoutingModule,

    // Material Modules
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatButtonModule
  ],
  declarations: [
    ToDoPageComponent,
    ToDoFormComponent,
    TaskListComponent,
    TaskComponent
  ],
  providers: [
    TasksService
  ],
})

export class ToDoListModule {}

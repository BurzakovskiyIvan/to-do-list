import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { Task } from '../../task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.sass']
})
export class TaskListComponent implements OnInit {

  tasks: Task[];

  constructor(private tasksService: TasksService) {
  }

  ngOnInit() {
    this.getTasks();
  }

  getTasks(): void {
    this.tasks = this.tasksService.getTasks();
  }

}

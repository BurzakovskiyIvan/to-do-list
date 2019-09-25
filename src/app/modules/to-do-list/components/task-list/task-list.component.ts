import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.sass']
})
export class TaskListComponent implements OnInit {

  tasks = [];

  constructor(private tasksService: TasksService) {
  }

  ngOnInit() {
    this.tasks = this.tasksService.getTasks();
  }

}

import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.sass']
})

export class TaskComponent implements OnInit {

  tasks = [];

  constructor(private tasksService: TasksService) {
  }

  ngOnInit() {
    this.tasks = this.tasksService.getTasks();
  }

}

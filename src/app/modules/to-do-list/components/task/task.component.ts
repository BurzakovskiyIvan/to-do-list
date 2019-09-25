import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { PriorityService } from '../../services/priority.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.sass']
})

export class TaskComponent implements OnInit {

  tasks = [];
  getPriorityColor: (priority: string) => string;

  constructor(private tasksService: TasksService, private priorityService: PriorityService) {
  }

  ngOnInit() {
    this.tasks = this.tasksService.getTasks();
    this.getPriorityColor = this.priorityService.getPriorityColor.bind(this.priorityService);
  }

}

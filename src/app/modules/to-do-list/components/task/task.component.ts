import { Component, OnInit } from '@angular/core';
import { PriorityService } from '../../services/priority.service';
import { TasksService } from '../../services/tasks.service';
import { Task } from '../../task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.sass']
})

export class TaskComponent implements OnInit {

  tasks: Task[];
  getPriorityColor: (priority: string) => string;

  constructor(private priorityService: PriorityService, private tasksService: TasksService) {
  }

  ngOnInit() {
    this.getTasks();
    this.getPriorityColor = this.priorityService.getPriorityColor.bind(this.priorityService);
  }

  getTasks(): void {
    this.tasks = this.tasksService.getTasks();
  }

}

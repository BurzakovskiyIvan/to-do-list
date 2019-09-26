import { Component, OnInit } from '@angular/core';
import { PriorityService } from '../../services/priority.service';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-to-do-form',
  templateUrl: './to-do-form.component.html',
  styleUrls: ['./to-do-form.component.sass']
})
export class ToDoFormComponent implements OnInit {
  priorities = [];
  onAddTask: () => any;

  constructor(private priorityService: PriorityService, private taskService: TasksService) { }

  ngOnInit() {
    this.priorities = this.priorityService.getPriorities();
    this.onAddTask = this.taskService.addTask.bind(this.taskService);
  }

}

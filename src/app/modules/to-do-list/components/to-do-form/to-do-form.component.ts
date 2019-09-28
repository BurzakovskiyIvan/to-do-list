import { Component, OnInit } from '@angular/core';
import { PriorityService } from '../../services/priority.service';
import { TasksService } from '../../services/tasks.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Task } from '../../task';

@Component({
  selector: 'app-to-do-form',
  templateUrl: './to-do-form.component.html',
  styleUrls: ['./to-do-form.component.sass']
})

export class ToDoFormComponent implements OnInit {

  // Reactive Form
  rForm: FormGroup;
  description: string;
  endDate: Date;
  priority: string;

  priorities = [];
  onAddTask: (task: Task) => any;
  onClearTasks: () => void;

  constructor(
    private priorityService: PriorityService,
    private taskService: TasksService,
    private formBuilder: FormBuilder
    ) {
      this.rForm = formBuilder.group({
        description: [null, Validators.required],
        endDate: [null, Validators.required],
        priority: [null, Validators.required]
      });
  }

  ngOnInit() {
    this.getPriorities();
    this.onAddTask = this.taskService.addTask.bind(this.taskService);
    this.onClearTasks = this.taskService.clearTasks.bind(this.taskService);
  }

  getPriorities(): void {
    this.priorities = this.priorityService.getPriorities();
  }

}

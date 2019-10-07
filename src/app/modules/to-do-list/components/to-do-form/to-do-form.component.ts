import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PRIORITIES } from '../../constants/priorities';

@Component({
  selector: 'app-to-do-form',
  templateUrl: './to-do-form.component.html',
  styleUrls: ['./to-do-form.component.sass']
})

export class ToDoFormComponent implements OnInit {
  public rForm: FormGroup;
  public priorities = [];

  constructor(
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
  }

  public onClearTasks(): void {
    this.taskService.clearTasks();
  }

  public onAddTask(): void {
    this.taskService.addTask(this.rForm.value);
  }

  private getPriorities(): void {
    this.priorities = Object.keys(PRIORITIES);
  }

}

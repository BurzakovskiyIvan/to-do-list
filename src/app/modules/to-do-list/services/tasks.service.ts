import { Injectable } from '@angular/core';
import { tasksData } from '../tasks-data';
import { Task } from '../task';

@Injectable()

export class TasksService {

  constructor() { }

  getTasks(): Task[] {
    return tasksData;
  }

  addTask() {
    console.log('New Task');
    /* const taskDescriptionField = document.getElementById('taskDescriptionField');
    console.log(taskDescriptionField); */
  }
}

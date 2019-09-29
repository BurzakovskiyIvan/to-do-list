import { Injectable } from '@angular/core';
import { Task } from '../task';

@Injectable()

export class TasksService {
  index = 0;
  tasksData: Task[] = [];
  storage = window.localStorage;

  constructor() {
    for (const task of Object.values(this.storage)) {
      this.tasksData.push(JSON.parse(task));
    }
  }

  getTasks(): Task[] {
    return this.tasksData;
  }

  addTask(task: Task) {
    this.index++;
    this.storage.setItem(this.index.toString(), JSON.stringify(task));
    this.tasksData.push(JSON.parse(this.storage.getItem(this.index.toString())));
  }

  clearTasks() {
    this.storage.clear();
    this.tasksData.length = 0;
  }
}

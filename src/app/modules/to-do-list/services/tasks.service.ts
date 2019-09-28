import { Injectable } from '@angular/core';
import { Task } from '../task';

const storage = window.localStorage;

@Injectable()

export class TasksService {
  index = 0;
  tasksData = [];

  constructor() {}

  getTasks(): Task[] {
    return this.tasksData;
  }

  addTask(task: Task) {
    this.index++;
    storage.setItem(this.index.toString(), JSON.stringify(task));
    this.tasksData.push(JSON.parse(storage.getItem(this.index.toString())));
  }

  clearTasks() {
    storage.clear();
    this.tasksData.length = 0;
  }
}

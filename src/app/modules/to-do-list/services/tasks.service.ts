import { Injectable } from '@angular/core';

@Injectable()

export class TasksService {
  constructor() { }

  getTasks() {
    return [
      {
        id: 1,
        description: 'first task with a loooong description',
        endDate: '9/4/2019',
        priority: 'Critical'
      },
      {
        id: 2,
        description: 'second task',
        endDate: '9/27/2019',
        priority: 'Minor'
      }
    ];
  }
}

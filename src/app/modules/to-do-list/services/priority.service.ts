import { Injectable } from '@angular/core';

@Injectable()

export class PriorityService {
  priorities = [
    {
      name: 'Critical',
      color: '#d62f22'
    },
    {
      name: 'Major',
      color: '#c94b8a'
    },
    {
      name: 'Minor',
      color: '#4a68bd'
    },
    {
      name: 'Trivial',
      color: '#25703a'
    }
  ];

  constructor() {
  }

  getPriorities() {
    return this.priorities;
  }

  getPriorityColor(priority: string) {
    for (const priorityEntity of this.priorities) {
      if (priorityEntity.name === priority) {
        return priorityEntity.color;
      }
    }
  }
}

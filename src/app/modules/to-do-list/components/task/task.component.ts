import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../../task';
import { PRIORITIES } from '../../priorities';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.sass']
})

export class TaskComponent implements OnInit {
  @Input() tasks: Task[];

  constructor() {
  }

  ngOnInit() {
  }

  public getPriorityColor(priority: string): string {
    const currentPriority = Object.entries(PRIORITIES).find((priorityElement) => {
      // priorityElement ==> [name, color]
      return priorityElement[0] === priority;
    });
    return currentPriority[1]; // returns a color
  }
}

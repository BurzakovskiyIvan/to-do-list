import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.sass']
})
export class TaskListComponent implements OnInit {
  tasks = [
    /* {
      id: 1,
      name: 'first task',
      endDate: '9/4/2019',
      priority: 'Critical'
    },
    {
      id: 2,
      name: 'second task',
      endDate: '9/27/2019',
      priority: 'Minor'
    } */
  ];

  constructor() { }

  ngOnInit() {
  }

}

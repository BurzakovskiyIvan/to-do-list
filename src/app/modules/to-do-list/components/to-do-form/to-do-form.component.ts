import { Component, OnInit } from '@angular/core';
import { PriorityService } from '../../services/priority.service';

@Component({
  selector: 'app-to-do-form',
  templateUrl: './to-do-form.component.html',
  styleUrls: ['./to-do-form.component.sass']
})
export class ToDoFormComponent implements OnInit {
  priorities = [];

  constructor(private priorityService: PriorityService) { }

  ngOnInit() {
    this.priorities = this.priorityService.getPriorities();
  }

}

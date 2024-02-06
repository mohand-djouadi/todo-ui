import { Component, OnInit, Input } from '@angular/core';
import { taskServive } from '../services/task.service';
import { task } from '../models/task.model';

@Component({
  selector: 'app-task-list-item',
  templateUrl: './task-list-item.component.html',
  styleUrl: './task-list-item.component.css'
})
export class TaskListItemComponent implements OnInit {

  @Input() taskItem !: task

  ngOnInit(): void {

  }
}

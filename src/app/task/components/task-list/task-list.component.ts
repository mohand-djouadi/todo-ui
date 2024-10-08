import { Component, Input, OnInit } from '@angular/core';
import { taskServive } from '../../../core/services/task.service';
import { task } from '../../../core/models/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent implements OnInit {

  constructor(private taskService: taskServive) { }
  tasks!: task[]

  ngOnInit(): void {
    this.tasks = this.taskService.getAllTasks();
  }
}

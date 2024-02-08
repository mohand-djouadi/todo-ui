import { Component, OnInit } from '@angular/core';
import { task } from '../models/task.model';
import { ActivatedRoute, Router } from '@angular/router';
import { taskServive } from '../services/task.service';

@Component({
  selector: 'app-task-det',
  templateUrl: './task-det.component.html',
  styleUrl: './task-det.component.css'
})
export class TaskDetComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private taskService: taskServive) { }

  taskDet!: task

  ngOnInit() {
    this.taskDet = this.taskService.getTaskById(+this.route.snapshot.params['id'])
  }

}

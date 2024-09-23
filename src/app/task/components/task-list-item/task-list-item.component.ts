import { Component, OnInit, Input } from '@angular/core';
import { taskServive } from '../../../core/services/task.service';
import { task } from '../../../core/models/task.model';
import { Router } from '@angular/router'

@Component({
  selector: 'app-task-list-item',
  templateUrl: './task-list-item.component.html',
  styleUrl: './task-list-item.component.css'
})
export class TaskListItemComponent implements OnInit {

  constructor(private router: Router) { }

  @Input() taskItem !: task

  ngOnInit(): void {

  }
  onView() {
    this.router.navigateByUrl(`/tasks/${this.taskItem.id}`)
  }
}

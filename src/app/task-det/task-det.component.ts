import { Component, Input } from '@angular/core';
import { task } from '../models/task.model';

@Component({
  selector: 'app-task-det',
  templateUrl: './task-det.component.html',
  styleUrl: './task-det.component.css'
})
export class TaskDetComponent {

  @Input() task!: task;

}

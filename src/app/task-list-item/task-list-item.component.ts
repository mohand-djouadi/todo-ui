import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-task-list-item',
  templateUrl: './task-list-item.component.html',
  styleUrl: './task-list-item.component.css'
})
export class TaskListItemComponent implements OnInit {

  @Input() taskItem !: TaskListItemComponent

  ngOnInit(): void {

  }
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskDetComponent } from './task-det/task-det.component';

const routes: Routes = [
  { path: 'tasks', component: TaskListComponent },
  { path: 'tasks/:id', component: TaskDetComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

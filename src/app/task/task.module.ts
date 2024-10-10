import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import {SideBarComponent} from "./components/side-bar/side-bar.component";
import {TaskListComponent} from "./components/task-list/task-list.component";
import {TaskFiltersComponent} from "./components/task-filters/task-filters.component";
import {TaskListItemComponent} from "./components/task-list-item/task-list-item.component";
import {NewTaskComponent} from "./pages/new-task/new-task.component";
import {SettingsComponent} from "./pages/settings/settings.component";
import {TasksComponent} from "./pages/tasks/tasks.component";
import {TaskRoutingModule} from "./task-routing.module";
import {RouterModule} from "@angular/router";
import {TaskDetailComponent} from './pages/task-detail/task-detail.component';
import {TaskMainComponent} from "./task-main.component";



@NgModule({
  declarations: [
    SideBarComponent,
    TaskListComponent,
    TaskMainComponent,
    TaskFiltersComponent,
    TaskListItemComponent,
    NewTaskComponent,
    SettingsComponent,
    TasksComponent,
    TaskDetailComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    TaskRoutingModule,
    SideBarComponent,
  ]
})
export class TaskModule { }

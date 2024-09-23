import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {TasksComponent} from "./pages/tasks/tasks.component";
import {TaskDetComponent} from "./components/task-det/task-det.component";
import {NewTaskComponent} from "./pages/new-task/new-task.component";
import {SettingsComponent} from "./pages/settings/settings.component";

const routes: Routes = [
  {
    path: '', component: TasksComponent,
    children : [
      { path: 'add', component: NewTaskComponent },
      { path: ':id/detail', component: TaskDetComponent },
      { path: 'settings', component: SettingsComponent },
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule { }

import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {TasksComponent} from "./pages/tasks/tasks.component";
import {NewTaskComponent} from "./pages/new-task/new-task.component";
import {SettingsComponent} from "./pages/settings/settings.component";
import {TaskMainComponent} from "./task-main.component";

const routes: Routes = [
  { path: '', component: TaskMainComponent,
    children: [
      { path: '', component: TasksComponent },
      { path: 'add', component: NewTaskComponent },
      { path: 'settings', component: SettingsComponent }
    ]
  },

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule { }

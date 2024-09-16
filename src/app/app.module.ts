import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskListItemComponent } from './components/task-list-item/task-list-item.component';
import { TaskDetComponent } from './components/task-det/task-det.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { TaskFiltersComponent } from './components/task-filters/task-filters.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { NewTaskComponent } from './pages/new-task/new-task.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { LogInComponent } from './pages/log-in/log-in.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { SignupBoxComponent } from './components/signup-box/signup-box.component';
import { LoginBoxComponent } from './components/login-box/login-box.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfilePicFormComponent } from './components/profile-pic-form/profile-pic-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskListItemComponent,
    TaskDetComponent,
    SideBarComponent,
    TaskFiltersComponent,
    TasksComponent,
    SettingsComponent,
    NewTaskComponent,
    SignUpComponent,
    LogInComponent,
    HomeComponent,
    HeaderComponent,
    SignupBoxComponent,
    LoginBoxComponent,
    ProfilePicFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

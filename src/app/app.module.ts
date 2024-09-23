import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskListComponent } from './task/components/task-list/task-list.component';
import { TaskListItemComponent } from './task/components/task-list-item/task-list-item.component';
import { TaskDetComponent } from './task/components/task-det/task-det.component';
import { SideBarComponent } from './task/components/side-bar/side-bar.component';
import { TaskFiltersComponent } from './task/components/task-filters/task-filters.component';
import { TasksComponent } from './task/pages/tasks/tasks.component';
import { SettingsComponent } from './task/pages/settings/settings.component';
import { NewTaskComponent } from './task/pages/new-task/new-task.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { LogInComponent } from './pages/log-in/log-in.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { SignupBoxComponent } from './components/signup-box/signup-box.component';
import { LoginBoxComponent } from './components/login-box/login-box.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfilePicFormComponent } from './components/profile-pic-form/profile-pic-form.component';
import {HttpClientModule} from "@angular/common/http";
import {TaskModule} from "./task/task.module";

@NgModule({
  declarations: [
    AppComponent,
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
    ReactiveFormsModule,
    HttpClientModule,
    TaskModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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

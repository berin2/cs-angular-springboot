import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import MaterialModule from "./modules/material-module";
import {AppRoutingModule} from "./modules/app-routing.module";
import { AppContainerComponent } from './components/app-container/app-container.component';
import { LoginComponent } from './components/login/login.component';
import {CoreModule} from "./modules/core.module";
import {FormsModule} from "@angular/forms";
import { RegisterComponent } from './components/register/register.component';
import { LandingComponent } from './components/landing/landing.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { ProjectViewComponent } from './components/project-view/project-view.component';
import { ProjectUpdateCreateComponent } from './components/project-update-create/project-update-create.component';
import { ErrorFetchComponent } from './components/error-fetch/error-fetch.component';
import { ProjectComponent } from './components/project/project.component';
import BootstrapModule from "./modules/bootstrap.module";

@NgModule({
  declarations: [
    AppComponent,
    AppContainerComponent,
    LoginComponent,
    RegisterComponent,
    LandingComponent,
    HomeComponent,
    NotFoundComponent,
    ProjectListComponent,
    ProjectViewComponent,
    ProjectUpdateCreateComponent,
    ErrorFetchComponent,
    ProjectComponent,
    ProjectUpdateCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MaterialModule,
    BootstrapModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

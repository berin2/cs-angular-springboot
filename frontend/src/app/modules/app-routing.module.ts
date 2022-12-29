import { NgModule } from '@angular/core';
import {Router, RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "../components/login/login.component";
import {RegisterComponent} from "../components/register/register.component";
import {LandingComponent} from "../components/landing/landing.component";
import {NotFoundComponent} from "../components/not-found/not-found.component";
import {ProjectComponent} from "../components/project/project.component";
import {AuthGuard} from "../guards/auth.guard";

const routes: Routes = [
  {path:"login",component:LoginComponent,canActivate: [AuthGuard]},
  {path:"register",component: RegisterComponent,canActivate: [AuthGuard]},
  {path:"", component: LandingComponent,canActivate: [AuthGuard]},
  {path: "test", component:ProjectComponent,},
  {path:"**", component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [Router],
  exports: [RouterModule]
})
export class AppRoutingModule { }

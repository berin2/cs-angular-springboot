import { NgModule } from '@angular/core';
import {Router, RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "../components/login/login.component";
import {RegisterComponent} from "../components/register/register.component";
import {LandingComponent} from "../components/landing/landing.component";
import {NotFoundComponent} from "../components/not-found/not-found.component";
import {ProjectComponent} from "../components/project/project.component";
import {AuthGuard} from "../guards/auth.guard";
import {NoAuthGuard} from "../guards/no-auth.guard";
import {IndexComponent} from "../components/index/index.component";

const routes: Routes = [
  {path:"login",component:LoginComponent,canActivate: [NoAuthGuard]},
  {path:"register",component: RegisterComponent,canActivate: [NoAuthGuard]},
  {path:"", component: IndexComponent},
  {path: "test", component:ProjectComponent, canActivate:[AuthGuard]},
  {path:"**", component: NotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      {onSameUrlNavigation: "reload"}
    ),
  ],
  providers: [Router],
  exports: [RouterModule]
})
export class AppRoutingModule { }

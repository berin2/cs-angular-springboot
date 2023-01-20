import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from "../services/auth-service/auth-service";
import {BaseGuard} from "./base.guard";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard extends BaseGuard implements CanActivate {
  constructor(public authService: AuthService, router:Router) {super(router)}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let retVal: boolean = this
                              .authService
                              .isAuthenticated();
    console.log("Guard---->"+retVal)
    if(!retVal) this.router.navigateByUrl("error");

    return retVal;
  }

}

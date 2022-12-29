import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {LoginDto} from "../../dtos/login-dto";
import {BaseService} from "../base.service";
import {ClientHelperService} from "../client-helper-service/client.helper.service";
import {Router} from "@angular/router";
import {RegisterDto} from "../../dtos/register-dto";

@Injectable({
  providedIn: 'root'
})
export class AuthService extends ClientHelperService {

  protected loggedInUsername: string|undefined ;
  constructor(protected client:HttpClient, protected router:Router) {
    super();
    this.loggedInUsername = undefined;
  }

  public isAuthenticated():boolean{return this.loggedInUsername !== undefined;}
  public login(username:string, password:string): Observable<boolean> {
    let retVal: Observable<boolean> = new Observable<boolean>();
    let obs: any = {
      next: (element: LoginDto) => {
        this.loggedInUsername = element.username;
        this.router.navigateByUrl("/").catch()
      },
      error: (err:any) =>{this.loggedInUsername = undefined; retVal.subscribe(err => false);},
      complete: () =>{}
    }
    this.client
      .post(BaseService.LOGIN, this.defaultOptions(new LoginDto(username,password)))
      .subscribe(obs);
    return retVal;
  }
  public logout():void{
    let options: any = {
      next: (element:any) =>{
        this.loggedInUsername = undefined;
      },
      error: (error:any) =>{
        this.loggedInUsername = undefined;
      },
      complete: (complete:any) =>{
        this.loggedInUsername = undefined;
      }
    };
    this.client.delete(BaseService.LOGOUT,this.defaultOptions(null))
      .subscribe(options);
  }
  public register(username:string, password:string, email:string): Observable<boolean>{
    let registerDto: RegisterDto = new RegisterDto(username,password,email);
    let retObservable: Observable<boolean> = new Observable<boolean>();
    let obj: any = {
      next:(element:any) =>{retObservable.subscribe(arg => true)},
      error: (error:any) =>{retObservable.subscribe(arg => false)},
      complete: (complete:any) =>{}
    }

    this.client
      .post(BaseService.REGISTER,this.defaultOptions(registerDto))
      .subscribe(obj);
    return retObservable;
  }
}

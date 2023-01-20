import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable, Subject} from "rxjs";
import {LoginDto} from "../../dtos/login-dto";
import {BaseService} from "../base.service";
import {ClientHelperService} from "../client-helper-service/client.helper.service";
import {Router} from "@angular/router";
import {RegisterDto} from "../../dtos/register-dto";

@Injectable({
  providedIn: 'root'
})
export class AuthService extends ClientHelperService {

  public loggedInUsername: string|undefined ;
  constructor(protected client:HttpClient, protected router:Router) {
    super();
    this.loggedInUsername = undefined;
  }

  public isAuthenticated():boolean{
    return this.loggedInUsername !== undefined && this.loggedInUsername !== null && this.loggedInUsername !== "";}
  public async login(username:string, password:string): Promise<boolean> {
    let obs: any = {
      next: (element: HttpResponse<LoginDto|null>) => {
        if(element.body !== null)
          this.loggedInUsername = element.body.username;
        },
      error: (err:any) =>{this.loggedInUsername = this.loggedInUsername = undefined;},
      complete: () =>{}
    }

    await this.client
      .post(BaseService.LOGIN,JSON.stringify(new LoginDto(username,password)) , this.defaultOptions())
      .subscribe(obs);

    return true;

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
  public register(username:string, password:string, email:string): Observable<HttpResponse<LoginDto|null>>{
    let registerDto: RegisterDto = new RegisterDto(username,password,email);

    return this.client
      .post<HttpResponse<LoginDto>>(BaseService.REGISTER,JSON.stringify(registerDto),this.defaultOptions())
  }

  public authenticateUser(user:LoginDto|null):void {
    if(user && user.username)
      this.loggedInUsername = user.username;
  }
  public onInit(): void {
    let obs: any = {
      next: (element: LoginDto) => {
        if(element.username !== null && element.username !== undefined)
          this.loggedInUsername = element.username;
      },
      error: (err:any) =>{this.loggedInUsername = undefined; this.router.navigateByUrl("");},
      complete: () =>{}
    }

    this.client.get(BaseService.ON_MOUNT)
      .subscribe(obs);

  }
}

import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(protected client:HttpClient) { }

  public login(username:string, password:string) {}
  public logout():void{}
  public register(username:string, password:string, email:string){}
}

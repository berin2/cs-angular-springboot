import { Component } from '@angular/core';
import {AuthService} from "../../services/auth-service/auth-service";
import {Observable} from "rxjs";
import {LoginDto} from "../../dtos/login-dto";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public username:string = "";
  public password:string = "";
  public loginFailed: boolean = false;

  constructor(private authService:AuthService, private router: Router) {}

  public async login():Promise<void>
  {
    let retval: boolean = await this.authService
      .login(this.username,this.password);
    if(retval === true)
        this.router.navigateByUrl("");

  }
}

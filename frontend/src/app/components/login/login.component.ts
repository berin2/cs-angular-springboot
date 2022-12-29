import { Component } from '@angular/core';
import {AuthService} from "../../services/auth-service/auth-service";
import {Observable} from "rxjs";
import {LoginDto} from "../../dtos/login-dto";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public username:string = "";
  public password:string = "";
  public loginFailed: boolean = false;

  constructor(private authService:AuthService) {}

  public login(): void
  {
    this.authService
      .login(this.username,this.password)
      .subscribe((success:boolean) => this.loginFailed = !success);
  }
}

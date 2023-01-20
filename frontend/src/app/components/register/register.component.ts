import {Component, DoCheck, OnChanges} from '@angular/core';
import {AuthService} from "../../services/auth-service/auth-service";
import {LoginDto} from "../../dtos/login-dto";
import {RegisterDto} from "../../dtos/register-dto";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements DoCheck {
  public username:string = "";
  public confirmUsername: string = "";
  public password:string = "";
  public confirmPassword: string = "";

  public canSendRequest: boolean;
  constructor(public authService:AuthService, protected router:Router) {
    this.canSendRequest = false;
  }

  public register():void {

    if(this.canSendRequest)
    {
      this.authService.register(this.username,this.password,"").subscribe(
        {
          next:(res) => {
            if(res.body !== null) {
              this.authService.authenticateUser(res.body);
              this.router.navigateByUrl("");
            }
          },
          error: (msg) => {},
          complete: () => {}
        }
      )
    }

  }

  ngDoCheck(): void {
    this.canSendRequest = this.username !== "" && this.password !== "";
    this.canSendRequest = this.canSendRequest && this.username == this.username;
    this.canSendRequest = this.canSendRequest && this.password == this.password;
  }
}

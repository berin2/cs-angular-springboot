import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  public username:string = "";
  public confirmUsername: string = "";
  public password:string = "";
  public confirmPassword: string = "";
  public email: string = "";
}

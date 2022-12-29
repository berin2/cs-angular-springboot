import {Component, Injectable} from '@angular/core';
import {AuthService} from "../../services/auth-service/auth-service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(  private authService: AuthService, public router: Router) {
  }

  public navToHome(): void {this.router.navigateByUrl("")}
  public renderHomeButton(): boolean {return this.router.url !== "/";}
}

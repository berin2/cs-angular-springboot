import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth-service/auth-service";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  public renderList: boolean;

  constructor(public router:Router, public authService: AuthService) {
    this.renderList = false;
  }

  public setRenderList(renderList:boolean):void {this.renderList = renderList;}
  public logout():void {this.authService.logout()}

}

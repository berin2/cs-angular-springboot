import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth-service/auth-service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit{

  public dataFetched: boolean = false;
  public isAuthenticated: boolean = false;
  constructor(public service: AuthService, public router:Router) {
    this.isAuthenticated = service.isAuthenticated();
  }

  ngOnInit(): void {

  }
}

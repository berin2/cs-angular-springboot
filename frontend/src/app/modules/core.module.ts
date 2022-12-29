import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import {HttpClient, HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [],
  imports: [
    FormsModule,
    HttpClientModule,
    CommonModule
  ],
  providers:[HttpClient],
  exports:[
    FormsModule,
    HttpClientModule,
    CommonModule
  ]
})
export class CoreModule { }

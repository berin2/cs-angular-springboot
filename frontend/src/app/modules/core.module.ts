import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {PdfViewerModule} from "ng2-pdf-viewer";


@NgModule({
  declarations: [],
  imports: [
    FormsModule,
    HttpClientModule,
    CommonModule,
    PdfViewerModule
  ],
  providers:[HttpClient],
  exports:[
    FormsModule,
    HttpClientModule,
    CommonModule,
    PdfViewerModule
  ]
})
export class CoreModule { }

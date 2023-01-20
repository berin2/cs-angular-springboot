import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ProjectDto} from "../../dtos/project-dto";
import {ProjectService} from "../../services/project-service/project.service";
import {Observable} from "rxjs";
import {NgbCollapseModule} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {

  @Input()  project: ProjectDto;
  @Output() deleteEvent: EventEmitter<number> = new EventEmitter();
  public deleteItem() {this.deleteEvent.emit(this.project.id);}

  public collapse: boolean;
  public renderUpdate:boolean;


  constructor(public projectService: ProjectService) {
    this.collapse = true;
    this.renderUpdate = false;
  }

  public toggleUpdate(value:boolean):void {this.renderUpdate = value;}


  public download():void{
    const a = document.createElement('a');
    const byteArray = new Uint8Array(this.project.byteData.length);
    for (let i = 0; i < this.project.byteData.length; i++) {
      byteArray[i] = this.project.byteData.charCodeAt(i);
    }

    const objectUrl = URL.createObjectURL(new Blob([byteArray]));
    a.href = objectUrl
    a.download = 'supporting_pdf.pdf';
    a.click();
    URL.revokeObjectURL(objectUrl);
  }


}

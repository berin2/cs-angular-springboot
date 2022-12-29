import {Component, Input} from '@angular/core';
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
  public collapse: boolean;
  public renderUpdate:boolean;

  constructor(public projectService: ProjectService) {
    this.project = new ProjectDto(2,"test","test-description jdsklfsdtest-description jdsklfsdtest-description jdsklfsdtest-description jdsklfsdtest-description jdsklfsdtest-description jdsklfsdtest-description jdsklfsdtest-description jdsklfsdtest-description jdsklfsdtest-description jdsklfsdtest-description jdsklfsdtest-description jdsklfsdtest-description jdsklfsdtest-description jdsklfsdtest-description jdsklfsdtest-description jdsklfsdtest-description jdsklfsdtest-description jdsklfsd",Date.now(),Date.now()+10000000,22.47,false);
    this.collapse = true;
    this.renderUpdate = false;
  }

  public toggleUpdate(value:boolean):void {this.renderUpdate = value;}


}

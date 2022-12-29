import {Component, Input, OnInit} from '@angular/core';
import {ProjectDto} from "../../dtos/project-dto";
import {BaseComponent} from "../BaseComponent";

@Component({
  selector: 'app-project-update-create',
  templateUrl: './project-update-create.component.html',
  styleUrls: ['./project-update-create.component.css']
})
export class ProjectUpdateCreateComponent extends BaseComponent implements OnInit{
  @Input() isUpdateForm: boolean;
  @Input() project: ProjectDto;

  ngOnInit(): void {
    if(!this.isUpdateForm)
      this.project = new ProjectDto(0,"test","test",Date.now(),Date.now()+10000,1.00,false);
  }


}

import {Component, OnInit} from '@angular/core';
import {ProjectService} from "../../services/project-service/project.service";

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit{
  public error:boolean;
  constructor(protected projectService: ProjectService) {
    this.error = false;
  }

  ngOnInit(): void {
    this.projectService.getAllProjects().subscribe(
      {
        error:() => this.error = true
      }
    )
  }
}

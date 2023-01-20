import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ProjectService} from "../../services/project-service/project.service";
import {ProjectDto} from "../../dtos/project-dto";
import {HttpResponse} from "@angular/common/http";

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit{
  public error: boolean;
  public loading: boolean;
  public projectsExist: boolean;
  public loadedProjects: ProjectDto [];


  constructor(protected projectService: ProjectService) {
    this.error = false;
    this.projectsExist = true;
    this.loadedProjects = [];
    this.loading = true;
  }

  delete(id: number): void {

     this.projectService.deleteProject(id).subscribe(
       {
       next: (next) => {
         let temp  =  this.loadedProjects.filter((val,index) => id !== val.id);
         this.loadedProjects = [];
         this.loadedProjects.push(...temp);
         this.projectsExist = this.loadedProjects.length > 0;
         },
        error: (msg:any) => {},
        complete: () =>{}
       }
     )
  }

  ngOnInit(): void {
    let observable= {
      next:(resp:HttpResponse<ProjectDto[]>) => {
        this.loading = false;
        this.projectsExist = resp.body !== null && resp.body.length > 0;
        if(this.projectsExist)
        {
          //@ts-ignore
            for(let project of resp.body)
            {
              let pushProject: ProjectDto = new ProjectDto(
                project.id,
                project.projectName,
                project.projectDescription,
                //@ts-ignore
                project.startDate,
                project.endDate,
                project.cost,
                project.cancelled,
                project.byteData
              );
              this.loadedProjects.push(pushProject);
            }
         }
        },
      error:(err:any) =>{
        this.error = true;
      },
      complete: () => {}
    }
    this.projectService.getAllProjects().subscribe(observable);
  }
}

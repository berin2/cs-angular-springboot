import { Injectable } from '@angular/core';
import {HttpClient, HttpRequest, HttpResponse} from "@angular/common/http";
import {AuthService} from "../auth-service/auth-service";
import {ProjectDto} from "../../dtos/project-dto";
import {BaseService} from "../base.service";
import {Observable, of} from "rxjs";
import {IdDto} from "../../dtos/IdDto";
import {ClientHelperService} from "../client-helper-service/client.helper.service";

@Injectable({
  providedIn: 'root'
})
export class ProjectService extends ClientHelperService{
  constructor(private client:HttpClient,private authService: AuthService) { super(); this.projects = [];}
  public projects: ProjectDto[] ;
  public getAllProjects(): Observable<ProjectDto[]> {
    let returnObs: Observable<ProjectDto[]> = new Observable<ProjectDto[]>();
    this.client.post<HttpResponse<ProjectDto[]>>(BaseService.PROJECTS,this.defaultOptions(undefined))
      .subscribe(
        {
          next: (response:HttpResponse<ProjectDto[]>) =>{returnObs.subscribe(response => response)},
          error: () =>{returnObs.subscribe(dumy => [])},
          complete: () => {}
        }
      );

    return returnObs;
  }
  public createProject(projectToCreate: ProjectDto): Observable<boolean> {
    let returnObs: Observable<boolean> = new Observable<boolean>();
    this.client.post<HttpResponse<ProjectDto>>(BaseService.PROJECTS,this.defaultOptions(projectToCreate))
      .subscribe(
        {
          next: (response:HttpResponse<any>) =>{returnObs.subscribe(dummy => true)},
          error: () =>{returnObs.subscribe(dumy => false)},
          complete: () => {}
        }
      );

    return returnObs;
  }
  public deleteProject(projectToDeleteId: IdDto): Observable<boolean> {

    let returnObs: Observable<boolean> = new Observable();
    this.client.delete<HttpResponse<any>>(BaseService.PROJECTS,this.defaultOptions(projectToDeleteId))
      .subscribe(
        {
          next: (response:HttpResponse<any>) =>{returnObs.subscribe(dummy => true)},
          error: () =>{returnObs.subscribe(dumy => false)},
          complete: () => {}
        }
      );

    return  returnObs;

  }
  public updateProject(projectToUpdate: ProjectDto): Observable<boolean> {
    let returnObs: Observable<boolean> = new Observable();
    this.client.put<HttpResponse<any>>(BaseService.PROJECTS,this.defaultOptions(projectToUpdate))
      .subscribe(
        {
          next: (response:HttpResponse<any>) =>{returnObs.subscribe(dummy => true)},
          error: () =>{returnObs.subscribe(dumy => false)},
          complete: () => {}
        }
      );
    return returnObs
  }

}

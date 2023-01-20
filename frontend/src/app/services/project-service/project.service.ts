import { Injectable } from '@angular/core';
import {HttpClient, HttpRequest, HttpResponse} from "@angular/common/http";
import {AuthService} from "../auth-service/auth-service";
import {ProjectDto} from "../../dtos/project-dto";
import {BaseService} from "../base.service";
import {Observable, of, Subject} from "rxjs";
import {IdDto} from "../../dtos/IdDto";
import {ClientHelperService} from "../client-helper-service/client.helper.service";

@Injectable({
  providedIn: 'root'
})
export class ProjectService extends ClientHelperService{
  constructor(private client:HttpClient,private authService: AuthService) { super();}

  public getAllProjects(): Observable<HttpResponse<ProjectDto[]>> {
    return this.client.get<HttpResponse<ProjectDto[]>>(BaseService.PROJECTS_ALL,this.defaultOptions(undefined));
  }
  public createProject(projectToCreate: ProjectDto): Observable<HttpResponse<ProjectDto>> {

    return this.client.post<HttpResponse<ProjectDto>>(BaseService.PROJECTS, JSON.stringify(projectToCreate.toApiObject()),this.defaultOptions(projectToCreate));
  }
  public deleteProject(projectToDeleteId: number): Observable<HttpResponse<any>> {
    return this.client.delete<HttpResponse<any>>(BaseService.PROJECTS+`/${projectToDeleteId}`,this.defaultOptions(projectToDeleteId));
  }
  public updateProject(projectToUpdate: ProjectDto): Observable<HttpResponse<any>> {
    return this.client.put<HttpResponse<any>>(BaseService.PROJECTS, JSON.stringify(projectToUpdate.toApiObject()),this.defaultOptions())
  }

}

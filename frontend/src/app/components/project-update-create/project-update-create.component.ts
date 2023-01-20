import {Component, Input, OnInit} from '@angular/core';
import {ProjectDto} from "../../dtos/project-dto";
import {BaseComponent} from "../BaseComponent";
import {ProjectService} from "../../services/project-service/project.service";
import {Observable, Observer} from "rxjs";
import {FileValidatorService} from "../../services/file-validator/file-validator.service";

@Component({
  selector: 'app-project-update-create',
  templateUrl: './project-update-create.component.html',
  styleUrls: ['./project-update-create.component.css']
})
export class ProjectUpdateCreateComponent extends BaseComponent implements OnInit{
  @Input() isUpdateForm: boolean;
  @Input() project: ProjectDto;

  public filePath:string = "";
  public operationSucceded: boolean;
  public operationInProgress: boolean;
  public statusMessage: string | null;
  public readonly  PDF_VALIDATOR_MSG: string = "Ooops! We only  take pdf's here. Please upload a correctly formatted pdf! ";

  constructor(public projectService: ProjectService,public fileValidator: FileValidatorService) {
    super();
    this.statusMessage = null;
    this.operationInProgress;
  }
  ngOnInit(): void {
    if(this.isUpdateForm === false)
      this.project = new ProjectDto(0,"","",Date.now(),Date.now()+10000,1.00,false,"");
  }

   performOperation():void{
    let observer: Observer<any> ={
      next: (resp) => {this.processResponse(true);this.filePath="";},
      error: (err) => {this.processResponse(false); },
      complete: () =>{this.operationInProgress = false;}
    };
    this.operationInProgress = true;
    if(this.isUpdateForm)  this.projectService.updateProject(this.project).subscribe(observer);
    else this.projectService.createProject(this.project).subscribe(observer);
  }

  processResponse(respValue:boolean):void {
    if(respValue)
    {
      this.statusMessage = "Whoo! The update is a success!"
      if(this.isUpdateForm === false)
         this.project = new ProjectDto(0,"","",Date.now(),Date.now(),1.00,false,"");
    }
    else this.statusMessage = "Ooopss, something went wrong!";
  }



  public async onFileChange(event: Event): Promise<void> {
    const input = event.target as HTMLInputElement;

    if (!input.files?.length) {
      return;
    }

    this.project.byteData = await input.files[0].text();
    console.log(this.project.byteData);
  }

}

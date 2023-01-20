package com.example.casestudy.project.entity;

import com.awsutils.AwsUtils3Service.service.AwsUtilsS3;
import com.example.casestudy.project.dto.ProjectDto;
import com.example.casestudy.shared.entity.BaseEntity;
import com.example.casestudy.shared.entity.ToDto;
import com.example.casestudy.shared.entity.UpdateFromDto;
import jakarta.persistence.Entity;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Arrays;

@Entity
@NoArgsConstructor @Data()
public class Project extends BaseEntity
        implements ToDto<ProjectDto>, UpdateFromDto<ProjectDto> {
    protected String projectName;
    protected String projectDescription;
    protected Long startDate;
    protected Long endDate;
    protected Double cost;
    protected Boolean cancelled;

    public Project(ProjectDto dto, String owningUser)
    {
        this.username = owningUser;
        this.projectName = dto.projectName;
        this.projectDescription = dto.projectDescription;
        this.startDate = dto.startDate;
        this.endDate = dto.endDate;
        this.cost = dto.cost;
        this.cancelled = dto.cancelled;
    }

    @Override
    public ProjectDto toDTO() {
        ProjectDto returnDto = new ProjectDto();
        returnDto.id = this.id;
        returnDto.cancelled = this.cancelled;
        returnDto.projectName = this.projectName;
        returnDto.projectDescription =  this.projectDescription;
        returnDto.startDate =  this.startDate;
        returnDto.endDate = this.endDate;
        returnDto.cost  = this.cost;

        return returnDto;
    }

    @Override
    public void updateFromDto(ProjectDto dtoToUpdate) {
        this.cancelled = dtoToUpdate.cancelled;
        this.projectName = dtoToUpdate.projectName;
        this.projectDescription = dtoToUpdate.projectDescription;;
        this.startDate = dtoToUpdate.startDate;
        this.endDate  = dtoToUpdate.endDate;
    }
}

package com.example.casestudy.project.service;

import com.example.casestudy.aws.S3PdfUploader;
import com.example.casestudy.project.dto.ProjectDto;
import com.example.casestudy.project.entity.Project;
import com.example.casestudy.project.repository.RProject;
import com.example.casestudy.shared.service.CrudService;
import com.example.casestudy.shared.service.PageableService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import javax.naming.OperationNotSupportedException;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ProjectService implements
        CrudService<Project, ProjectDto,Long>,
        PageableService<ProjectDto> {

    protected final RProject rProject;
    protected final S3PdfUploader pdfUploader;

    public String createObjectName(String username,Long id)
    {
        return String.format("%s/%s/%d_project",username,Project.class.toString(),id);
    }
    @Override
    public void create(ProjectDto projectDto, String authenticatedUser) throws Exception {
        Project createdProject = new Project(projectDto,authenticatedUser);
        this.rProject.save(createdProject);
        if(this.pdfUploader.validatePdf(projectDto.byteData.getBytes(StandardCharsets.UTF_8)))
            this.pdfUploader.uploadPdf(projectDto.byteData.getBytes(StandardCharsets.UTF_8),this.createObjectName(authenticatedUser,createdProject.getId()));

    }

    @Override
    public ProjectDto read(Long id, String authenticatedUser) throws Exception {
        Project project = this.rProject.findByIdAndUsername(id,authenticatedUser);
        ProjectDto returnDto = project.toDTO();
        return returnDto;
    }

    @Override
    public void update(ProjectDto projectDto,String authenticatedUser) throws Exception {
        Project project = this.rProject.findByIdAndUsername(projectDto.id,authenticatedUser);
        project.updateFromDto(projectDto);
        this.rProject.save(project);

        if(pdfUploader.validatePdf(projectDto.byteData.getBytes()))
            pdfUploader.uploadPdf(projectDto.byteData.getBytes(),this.createObjectName(authenticatedUser, projectDto.id));

    }

    @Override
    public void delete(Long id,String authenticatedUser) throws Exception {
        this.rProject.deleteByUsernameAndId(authenticatedUser,id);
        this.deleteProjectPdf(id,authenticatedUser);
    }

    public void deleteProjectPdf(Long id, String authenticatedUser){
        this.pdfUploader.deletePdf(this.createObjectName(authenticatedUser,id));
    }

    @Override
    public List<ProjectDto> getAllByUsername(String username) throws IOException {
        List<Project> projects = this.rProject.findAllByUsername(username);
        List<ProjectDto> returnList = new ArrayList<>();
        for(Project project: projects) returnList.add(project.toDTO());

        for(ProjectDto returnProject: returnList) {

            byte [] returnBytes = this.pdfUploader.getPdf(this.createObjectName(username, returnProject.id));
            if(returnBytes!=null)
                returnProject.byteData = new String(returnBytes);
        }
        return returnList;
    }

    @Override
    public Page<ProjectDto> getPage(String username, Integer pageNumber) throws OperationNotSupportedException {
        throw new OperationNotSupportedException("getPage is not supported for ProjectService.");
    }
}

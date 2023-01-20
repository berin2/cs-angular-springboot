package com.example.casestudy.project.controller;

import com.example.casestudy.aws.S3PdfUploader;
import com.example.casestudy.project.dto.ProjectDto;
import com.example.casestudy.project.repository.RProject;
import com.example.casestudy.project.service.ProjectService;
import com.example.casestudy.security.entity.ApplicationDetails;
import com.example.casestudy.shared.api.ApplicationApi;
import com.example.casestudy.shared.controller.CrudController;
import com.example.casestudy.shared.controller.PageableController;
import com.example.casestudy.shared.dto.PageDto;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.List;

@RestController
@RequiredArgsConstructor
public class ProjectController implements
        CrudController<Long, ProjectDto, ApplicationDetails>,
        PageableController<Long,ProjectDto,ApplicationDetails> {
    protected final RProject rProject;
    protected final ProjectService sProject;
    protected final S3PdfUploader  pdfUploader;

    @PostMapping(ApplicationApi.PROJECTS)
    @ResponseStatus(HttpStatus.OK)
    @Override
    public void create( @AuthenticationPrincipal  ApplicationDetails applicationDetails, @RequestBody ProjectDto creationObject) throws Exception {
        this.sProject.create(creationObject,applicationDetails.getUsername());
    }

    @GetMapping(ApplicationApi.PROJECTS)
    @ResponseStatus(HttpStatus.OK)
    @Override
    public ProjectDto read(@AuthenticationPrincipal  ApplicationDetails applicationDetails, Long projectId) throws Exception {
        return sProject.read(projectId,applicationDetails.getUsername());
    }

    @PutMapping(ApplicationApi.PROJECTS)
    @ResponseStatus(HttpStatus.OK)
    @Override
    public ProjectDto update( @AuthenticationPrincipal ApplicationDetails applicationDetails, @RequestBody ProjectDto projectDto) throws Exception {
        sProject.update(projectDto, applicationDetails.getUsername());
        return projectDto;
    }

    @DeleteMapping(ApplicationApi.PROJECTS+"/{projectId}")
    @ResponseStatus(HttpStatus.OK)
    @Override
    public void delete(ApplicationDetails applicationDetails, @PathVariable() Long projectId) throws Exception {
        sProject.delete(projectId, applicationDetails.getUsername());
    }

    @DeleteMapping(ApplicationApi.PROJECTS_PDF+"/{projectId}")
    @ResponseStatus(HttpStatus.OK)
    public void deletePdf(ApplicationDetails applicationDetails, @PathVariable() Long projectId) throws Exception {
        sProject.deleteProjectPdf(projectId, applicationDetails.getUsername());
    }

    @GetMapping(ApplicationApi.PROJECTS_ALL)
    @Override()
    public List<ProjectDto> getAllByPrincipal(@AuthenticationPrincipal  ApplicationDetails details) throws IOException {
         return sProject.getAllByUsername(details.getUsername());
    }

    @Override
    public List<Page<ProjectDto>> getPage(ApplicationDetails details, PageDto page) throws Exception {
        throw new Exception("getPage method is not supported in ProjectController.");
    }
}

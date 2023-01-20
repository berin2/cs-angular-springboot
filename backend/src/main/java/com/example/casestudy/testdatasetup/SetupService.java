package com.example.casestudy.testdatasetup;

import com.example.casestudy.project.dto.ProjectDto;
import com.example.casestudy.project.entity.Project;
import com.example.casestudy.project.repository.RProject;
import com.example.casestudy.security.entity.ApplicationDetails;
import com.example.casestudy.security.repository.RApplicationDetails;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class SetupService {

    @Autowired protected RApplicationDetails rApplicationDetails;
    @Autowired protected RProject rProject;
    @Autowired protected PasswordEncoder encoder;


    @PostConstruct()
    public void setupData(){
        ApplicationDetails applicationDetailsIterator;
        ProjectDto projectDto;
        Project projectIterator;
        String userIterator;

        for(int userNumIterator = 0 ; userNumIterator < 10; userNumIterator++)
        {
            userIterator = "user_"+ userNumIterator;
            applicationDetailsIterator = new ApplicationDetails(userIterator,encoder.encode(userIterator));
            applicationDetailsIterator = rApplicationDetails.save(applicationDetailsIterator);

            for(int projectNumberIterator = 0; projectNumberIterator < 10; projectNumberIterator++)
            {

                projectDto = new ProjectDto();
                projectDto.startDate = System.currentTimeMillis();
                projectDto.endDate = System.currentTimeMillis() + 10000;
                projectDto.projectName = "project-"+projectNumberIterator;
                projectDto.projectDescription = "project description" + projectNumberIterator;
                projectDto.cancelled = projectNumberIterator % 2 == 0 ? true : false;
                projectDto.cost = 1.45 + projectNumberIterator * userNumIterator;

                projectIterator = new Project(projectDto, applicationDetailsIterator.getUsername());
                projectIterator = rProject.save(projectIterator);
            }
        }

    }
}

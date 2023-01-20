package com.example.casestudy.project.repository;

import com.example.casestudy.project.entity.Project;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public interface RProject extends JpaRepository<Project,Long> {
    List<Project> findAllByUsername(String username);
    Project findByIdAndUsername(Long id, String username);
    @Transactional
    Integer deleteByUsernameAndId(String username, Long id);
}

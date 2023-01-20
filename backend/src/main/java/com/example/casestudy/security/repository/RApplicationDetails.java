package com.example.casestudy.security.repository;

import com.example.casestudy.security.entity.ApplicationDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RApplicationDetails extends JpaRepository<ApplicationDetails,String>
{
    Boolean existsByUsername(String username);
    ApplicationDetails findByUsername(String username);
}

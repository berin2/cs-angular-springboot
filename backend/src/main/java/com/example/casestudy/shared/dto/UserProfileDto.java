package com.example.casestudy.shared.dto;

import com.example.casestudy.security.entity.ApplicationDetails;
import org.springframework.security.core.userdetails.UserDetails;

public class UserProfileDto {
    public String username;

    public UserProfileDto(ApplicationDetails details)
    { this.username = details.getUsername();}

}

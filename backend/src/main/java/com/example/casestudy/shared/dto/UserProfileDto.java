package com.example.casestudy.permitall.dto;

import org.springframework.security.core.userdetails.UserDetails;

public class UserProfileDto {
    public String username;

    public UserProfileDto(UserDetails details)
    {
        this.username = details.getUsername();
    }

}

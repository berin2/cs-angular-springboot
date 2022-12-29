package com.example.casestudy.permitall.controller;

import com.example.casestudy.permitall.dto.LoginDto;
import com.example.casestudy.permitall.dto.RegisterDto;
import com.example.casestudy.shared.dto.UserProfileDto;
import com.example.casestudy.permitall.service.AuthenticationService;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RestController;

import javax.security.auth.login.CredentialException;

@RestController
@RequiredArgsConstructor
public class LoginRegisterController {

    protected final AuthenticationService authenticationService;

    public UserProfileDto login( HttpServletRequest request, LoginDto loginDto) throws CredentialException {
        return authenticationService.login(request,loginDto);
    }

    public UserProfileDto register(HttpServletRequest request, RegisterDto registerDto){return authenticationService.register(request,registerDto);}
}

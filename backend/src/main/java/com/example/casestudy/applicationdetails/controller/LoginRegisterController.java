package com.example.casestudy.applicationdetails.controller;

import com.example.casestudy.applicationdetails.dto.LoginDto;
import com.example.casestudy.applicationdetails.dto.RegisterDto;
import com.example.casestudy.shared.api.ApplicationApi;
import com.example.casestudy.shared.dto.UserProfileDto;
import com.example.casestudy.applicationdetails.service.AuthenticationService;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import javax.security.auth.login.CredentialException;

@RestController
@RequiredArgsConstructor
public class LoginRegisterController {

    protected final AuthenticationService authenticationService;

    @PostMapping(ApplicationApi.LOGIN)
    @ResponseStatus(HttpStatus.OK)
    public UserProfileDto login( HttpServletRequest request, @RequestBody LoginDto loginDto) throws CredentialException {
        return authenticationService.login(request,loginDto);
    }

    @PostMapping(ApplicationApi.REGISTER)
    @ResponseStatus(HttpStatus.OK)
    public UserProfileDto register(HttpServletRequest request, @RequestBody RegisterDto registerDto) throws CredentialException {
        authenticationService.register(request,registerDto);
        return authenticationService.login(request,new LoginDto(registerDto.username,registerDto.password));
    }
}

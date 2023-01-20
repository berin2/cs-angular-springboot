package com.example.casestudy.applicationdetails.controller;

import com.example.casestudy.security.entity.ApplicationDetails;
import com.example.casestudy.shared.api.ApplicationApi;
import com.example.casestudy.shared.dto.UserProfileDto;
import jakarta.servlet.http.HttpSession;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.web.authentication.session.SessionAuthenticationException;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LogoutOnMountController {
    @GetMapping(ApplicationApi.ON_MOUNT)
    public UserProfileDto onMount(@AuthenticationPrincipal ApplicationDetails details) {
        if(details == null) throw new SessionAuthenticationException("Session contained an empty authentication principal.");
        return new UserProfileDto(details);
    };

    @DeleteMapping(ApplicationApi.LOGOUT)
    public void logout(HttpSession session){
        session.invalidate();
    }
}

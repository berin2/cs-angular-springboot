package com.example.casestudy.applicationdetails.service;

import com.example.casestudy.applicationdetails.dto.LoginDto;
import com.example.casestudy.applicationdetails.dto.RegisterDto;
import com.example.casestudy.security.entity.ApplicationDetails;
import com.example.casestudy.shared.dto.UserProfileDto;
import com.example.casestudy.security.service.ApplicationUserDetailsService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.context.SecurityContextImpl;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.security.auth.login.CredentialException;

@Service
@RequiredArgsConstructor
public class AuthenticationService {
    protected final ApplicationUserDetailsService applicationUserDetailsService;
    protected final PasswordEncoder encoder;

    public UserProfileDto login(HttpServletRequest request, LoginDto dto) throws CredentialException {
       String username = dto.username;
       ApplicationDetails user = applicationUserDetailsService.loadUserByUsername(username);
       if(!encoder.matches(dto.password,user.getPassword()))
           throw new CredentialException("Username password combination does not match.");
       Authentication usernameAndPasswordAuthentication = new UsernamePasswordAuthenticationToken(user,user.getPassword(),user.getAuthorities());
       SecurityContext securityContext = new SecurityContextImpl(usernameAndPasswordAuthentication);
       HttpSession httpSession = request.getSession(true);
       httpSession.setAttribute("SPRING_SECURITY_CONTEXT",securityContext);
       SecurityContextHolder.setContext(securityContext);

       return new UserProfileDto(user);
    }

    public void logout(HttpServletRequest request) throws CredentialException
    {
        HttpSession session = request.getSession(false);

        if(session != null)
            session.invalidate();
        else
            throw new CredentialException("Api permitted and attempted to deregister a non existing session with the system.");
    }

    public UserProfileDto register(HttpServletRequest request, RegisterDto registerDto) throws SecurityException
    {
        return this.applicationUserDetailsService.registerUser(registerDto);
    }

    public void onMount(HttpServletRequest request)
    {
        HttpSession session = request.getSession(false);
    }


}

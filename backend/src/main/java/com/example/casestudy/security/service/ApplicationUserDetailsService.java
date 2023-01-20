package com.example.casestudy.security.service;

import com.example.casestudy.applicationdetails.dto.RegisterDto;
import com.example.casestudy.security.entity.ApplicationDetails;
import com.example.casestudy.security.repository.RApplicationDetails;
import com.example.casestudy.shared.dto.UserProfileDto;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ApplicationUserDetailsService implements UserDetailsService {
    protected final RApplicationDetails repository;
    protected final PasswordEncoder encoder;
    @Override
    public ApplicationDetails loadUserByUsername(String username) throws UsernameNotFoundException
    { return repository.findByUsername(username); }

    public Boolean existsByUsername(String username)
    {return  repository.existsByUsername(username);}

    public UserProfileDto registerUser(RegisterDto dto) throws SecurityException
    {
        ApplicationDetails details;
        if(this.repository.existsByUsername(dto.username))
            throw new SecurityException("The selected username is already taken.");
        else
        {
            details = new ApplicationDetails(dto.username, encoder.encode(dto.password));
            details = this.repository.save(details);
        }

        return new UserProfileDto(details);
    }


}

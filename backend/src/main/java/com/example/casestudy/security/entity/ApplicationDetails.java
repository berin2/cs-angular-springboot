package com.example.casestudy.security.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Transient;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@Entity
public class ApplicationDetails implements UserDetails {
    @Id()
    String username;
    String password;

    protected static List<GrantedAuthority> authorityList;
    static { authorityList = new ArrayList<>(); } //no auth/role based features at this stage.


    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorityList ;
    }

    @Override
    public String getPassword() {
        return this.password;
    }

    //below security defaults not impl at this stage.
    @Override
    public String getUsername() {
        return this.username;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}

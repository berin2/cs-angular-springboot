package com.example.casestudy.security.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Transient;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@Entity @RequiredArgsConstructor
public class ApplicationDetails implements UserDetails {
    @Id()
    protected final String username;
    protected final String password;


    protected static List<GrantedAuthority> authorityList;
    public ApplicationDetails(){
        this.username=null;
        this.password = null;
    }
    static {
        authorityList = new ArrayList<>();
        authorityList.add(new GrantedAuthority() {
            @Override
            public String getAuthority() {
                return "";
            }
        });
    } //no auth/role based features at this stage.



    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return new ArrayList<>();
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

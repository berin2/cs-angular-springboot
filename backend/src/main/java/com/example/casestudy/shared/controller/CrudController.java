package com.example.casestudy.shared.controller;

import org.springframework.security.core.annotation.AuthenticationPrincipal;

public interface CrudController <ID,DTO, InjectedPrincipal>{
     void create(@AuthenticationPrincipal InjectedPrincipal principal, DTO creationObject) throws Exception;
     DTO read(@AuthenticationPrincipal InjectedPrincipal principal, ID id) throws Exception;
     DTO update(@AuthenticationPrincipal InjectedPrincipal principal, DTO dto) throws Exception;
     void delete(@AuthenticationPrincipal InjectedPrincipal principal, ID id) throws Exception;
}

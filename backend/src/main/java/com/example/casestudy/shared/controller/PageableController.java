package com.example.casestudy.shared.controller;

import com.example.casestudy.shared.dto.PageDto;
import org.springframework.data.domain.Page;
import org.springframework.security.core.annotation.AuthenticationPrincipal;

import java.io.IOException;
import java.util.List;

public interface PageableController <ID,DTO,InjectedPrincipal> {
     List<DTO> getAllByPrincipal(@AuthenticationPrincipal  InjectedPrincipal principal) throws IOException;
     List<Page<DTO>> getPage(@AuthenticationPrincipal InjectedPrincipal principal,PageDto page) throws Exception;
}

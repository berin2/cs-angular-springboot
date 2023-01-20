package com.example.casestudy.shared.service;

import org.springframework.data.domain.Page;

import javax.naming.OperationNotSupportedException;
import java.io.IOException;
import java.util.List;

public interface PageableService <DTO>{
    List<DTO> getAllByUsername(String username) throws IOException;
    Page<DTO> getPage(String username, Integer pageNumber) throws OperationNotSupportedException;
}

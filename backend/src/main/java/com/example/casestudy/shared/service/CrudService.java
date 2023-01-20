package com.example.casestudy.shared.service;

import java.util.List;

public interface CrudService <Entity,DTO,ID>{
    void create(DTO dto,String authenticatedUser) throws Exception;
    DTO read(ID id,String authenticatedUser) throws Exception;
    void update(DTO dto,String authenticatedUser) throws Exception;
    void delete(ID id,String authenticatedUser) throws Exception;
}

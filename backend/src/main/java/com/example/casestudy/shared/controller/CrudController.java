package com.example.casestudy.shared.controller;

public interface CrudController <ID,DTO>{
     void create(DTO creationObject);
     DTO read(ID id);
     DTO update(DTO dto);
     void delete(ID id);
}

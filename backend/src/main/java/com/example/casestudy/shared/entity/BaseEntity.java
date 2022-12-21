package com.example.casestudy.shared.entity;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.MappedSuperclass;
import lombok.Data;
import lombok.NoArgsConstructor;

@MappedSuperclass
@Data()
@NoArgsConstructor()
public class BaseEntity {
    @Id()@GeneratedValue(strategy = GenerationType.IDENTITY)
    protected Long id;
    protected String username;
}

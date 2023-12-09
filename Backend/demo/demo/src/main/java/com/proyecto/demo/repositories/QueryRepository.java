package com.proyecto.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.proyecto.demo.models.QueryModels;

@Repository
public interface QueryRepository extends JpaRepository<QueryModels, Long> {
    
}

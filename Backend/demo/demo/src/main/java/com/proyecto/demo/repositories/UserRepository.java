package com.proyecto.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.proyecto.demo.models.UserModels;

@Repository
public interface UserRepository extends JpaRepository<UserModels, Long> {
    UserModels findByUsername(String username);
}

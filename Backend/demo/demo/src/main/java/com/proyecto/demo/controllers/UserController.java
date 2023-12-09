package com.proyecto.demo.controllers;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.proyecto.demo.models.UserModels;
import com.proyecto.demo.repositories.UserRepository;

@CrossOrigin
@RestController
@RequestMapping("/api/users")
public class UserController {

  @Autowired
  private UserRepository userRepository;

  @GetMapping
  public List<UserModels> getAllUsers() {
    return userRepository.findAll();
  } 

  @GetMapping("/{id}")
  public UserModels getUserById(@PathVariable Long id) {
    return userRepository.findById(id).get();
  }

  @PostMapping
  public UserModels createUser(@RequestBody UserModels user) {
    return userRepository.save(user);
  }

  @PatchMapping("/{id}")
  public UserModels updateUser(@PathVariable Long id, @RequestBody UserModels user) {
    UserModels foundUser = userRepository.findById(id).get();
    if (user.getUsername() != null) foundUser.setUsername(user.getUsername());
    if (user.getScore() != null) foundUser.setScore(user.getScore());
    return userRepository.save(foundUser);
  }
  

  @DeleteMapping("/{id}")
  public void deleteUser(@PathVariable Long id) {
    userRepository.deleteById(id);
  }

  @PostMapping("/login")
  public UserModels getUserOrCreate(@RequestBody UserModels user) {
    UserModels foundUser = userRepository.findByUsername(user.getUsername());
    if (foundUser != null) {
      return foundUser;
    } else if (user.getUsername().equals("admin")) {
      user.setIsAdmin(true);
      return userRepository.save(user);
    } else {
      return userRepository.save(user);
    }
  }

}
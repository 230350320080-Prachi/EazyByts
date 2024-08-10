package com.chatapp.service;

import com.chatapp.model.User;

import java.util.Optional;

public interface UserService {
    User saveUser(User user);
    Optional<User> findByUsername(String username);
    boolean authenticateUser(String username, String password);
}

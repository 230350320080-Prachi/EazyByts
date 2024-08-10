package com.chatapp.service;

import com.chatapp.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface userRepository extends JpaRepository<User, Long> {
    User findByUsername(String username);
}

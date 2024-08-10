package com.chatapp.controller;

import com.chatapp.model.User;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.web.bind.annotation.ModelAttribute;

@RestController
@RequestMapping("/general")
@SessionAttributes("currentUser")
public class GeneralRoomController {

    private User currentUser;

    @ModelAttribute("currentUser")
    public User getCurrentUser() {
        if (this.currentUser == null) {
            this.currentUser = new User(); // Initialize or retrieve user
        }
        return this.currentUser;
    }

    @PostMapping("/setUser")
    public ResponseEntity<String> setUser(@ModelAttribute("currentUser") User user) {
        if (user != null && user.getUsername() != null) {
            this.currentUser = user;
            return ResponseEntity.ok("User set successfully");
        } else {
            return ResponseEntity.badRequest().body("Invalid user data");
        }
    }

    @GetMapping("/messages")
    public ResponseEntity<?> getMessages() {
        // Logic to retrieve messages from the general room
        return ResponseEntity.ok("List of messages");
    }

    @PostMapping("/sendMessage")
    public ResponseEntity<String> sendMessage(@RequestBody String message) {
        if (this.currentUser != null && this.currentUser.getUsername() != null) {
            // Logic to send a message to the general room
            return ResponseEntity.ok("Message sent");
        } else {
            return ResponseEntity.status(403).body("You must be logged in to send messages");
        }
    }
}

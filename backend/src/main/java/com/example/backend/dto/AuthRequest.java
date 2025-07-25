package com.example.backend.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;
@Data
public class AuthRequest {
    @NotBlank
    private String username;
    @NotBlank
    private String password;

    // Getters and setters
    public String getUsername() {
        return username;
    }
    public void setUsername(String username) {
        this.username = username;
    }
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }
}

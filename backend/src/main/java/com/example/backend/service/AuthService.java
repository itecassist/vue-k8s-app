package com.example.backend.service;

import com.example.backend.dto.AuthRequest;
import com.example.backend.dto.RegisterRequest;

public interface AuthService {
    void register(RegisterRequest request);
    String login(AuthRequest request);
}

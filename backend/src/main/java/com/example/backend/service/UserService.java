package com.example.backend.service;

import com.example.backend.dto.UserResponseDTO;
import com.example.backend.model.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface UserService {
    Page<UserResponseDTO> getAllUsers(Pageable pageable);

    UserResponseDTO getUserById(Long id);

    UserResponseDTO createUser(User user);

    UserResponseDTO updateUser(Long id, User user);
    void deleteUser(Long id);
}

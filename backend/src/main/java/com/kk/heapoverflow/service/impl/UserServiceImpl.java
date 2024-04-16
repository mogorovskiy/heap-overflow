package com.kk.heapoverflow.service.impl;

import com.kk.heapoverflow.dto.user.request.UserRegistrationRequestDto;
import com.kk.heapoverflow.dto.user.response.UserResponseDto;
import com.kk.heapoverflow.mapper.UserMapper;
import com.kk.heapoverflow.repostitory.UserRepository;
import com.kk.heapoverflow.service.UserService;
import com.kk.heapoverflow.model.User;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final UserMapper userMapper;

    @Override
    public UserResponseDto register(UserRegistrationRequestDto request) {
        if (userRepository.findByEmail(request.getEmail()).isPresent()) {
            throw new RuntimeException("User already exists with such email: " + request.getEmail());
        }

        User user = new User();
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        user.setEmail(request.getEmail());
        user.setFirstName(request.getFirstName());
        user.setLastName(request.getLastName());
        user.setProfilePhotoUrl(request.getProfilePhotoUrl());
        User savedUser = userRepository.save(user);

        return userMapper.toDto(savedUser);
    }
}

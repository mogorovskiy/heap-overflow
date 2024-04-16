package com.kk.heapoverflow.service;

import com.kk.heapoverflow.dto.user.request.UserRegistrationRequestDto;
import com.kk.heapoverflow.dto.user.response.UserResponseDto;

public interface UserService {
    UserResponseDto register(UserRegistrationRequestDto request);
}

package com.kk.heapoverflow.service;

import com.kk.heapoverflow.dto.user.request.*;
import com.kk.heapoverflow.dto.user.response.*;
import com.kk.heapoverflow.model.*;

import java.util.*;

public interface UserService {
    UserResponseDto register(UserRegistrationRequestDto request);

    List<User> getAllUsers();

    User getUserById(Long userId);

    User updateUser(Long userId, User userDetails);

    void deleteUser(Long userId);
}

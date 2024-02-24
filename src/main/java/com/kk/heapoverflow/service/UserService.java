package com.kk.heapoverflow.service;

import com.kk.heapoverflow.model.*;
import org.springframework.stereotype.*;

import java.util.*;

@Service
public interface UserService {
    User createUser(UserRequestDto userRequestDto);

    List<User> getAllUsers();

    User getUserById(Long userId);

    User updateUser(Long userId, User userDetails);

    void deleteUser(Long userId);
}

package com.kk.heapoverflow.mapper;

import com.kk.heapoverflow.dto.*;
import com.kk.heapoverflow.model.*;
import org.springframework.stereotype.*;

@Service
public class UserMapper {
    public User toModel(UserRequestDto userRequestDto) {
        User user = new User();
        user.setEmail(userRequestDto.getEmail());
        user.setPassword(userRequestDto.getPassword());
        user.setFirstName(userRequestDto.getFirstName());
        user.setLastName(userRequestDto.getLastName());
        return user;
    }
}

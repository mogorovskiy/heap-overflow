package com.kk.heapoverflow.mapper;

import com.kk.heapoverflow.config.handler.*;
import com.kk.heapoverflow.dto.user.request.*;
import com.kk.heapoverflow.dto.user.response.*;
import com.kk.heapoverflow.model.User;
import org.mapstruct.Mapper;

@Mapper(config = MapperConfig.class)
public interface UserMapper {
    User toModel(UserRegistrationRequestDto userRequestDto);

    UserResponseDto toDto(User user);
}

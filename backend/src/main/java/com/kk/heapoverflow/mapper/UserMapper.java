package com.kk.heapoverflow.mapper;

import com.kk.heapoverflow.config.MapperConfig;
import com.kk.heapoverflow.dto.user.response.UserResponseDto;
import com.kk.heapoverflow.model.User;
import org.mapstruct.Mapper;

@Mapper(config = MapperConfig.class)
public interface UserMapper {
    UserResponseDto toDto(User user);
}

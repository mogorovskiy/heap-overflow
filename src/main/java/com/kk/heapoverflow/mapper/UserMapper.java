package com.kk.heapoverflow.mapper;

import com.kk.heapoverflow.dto.UserRequestDto;
import com.kk.heapoverflow.model.User;
import org.mapstruct.*;

@Mapper(config = MapperConfig.class)
public interface UserMapper {
    User toModel(UserRequestDto userRequestDto);
}

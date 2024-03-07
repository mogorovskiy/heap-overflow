package com.kk.heapoverflow.mapper;

import com.kk.heapoverflow.dto.*;
import com.kk.heapoverflow.model.*;
import org.mapstruct.*;

@Mapper(config = MapperConfig.class)
public interface QuestionMapper {
    Question toModel(QuestionRequestDto questionRequestDto);
}

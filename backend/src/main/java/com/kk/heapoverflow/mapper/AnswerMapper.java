package com.kk.heapoverflow.mapper;

import com.kk.heapoverflow.config.handler.*;
import com.kk.heapoverflow.dto.*;
import com.kk.heapoverflow.model.*;
import org.mapstruct.Mapper;

@Mapper(config = MapperConfig.class)
public interface AnswerMapper {
    Answer toModel(AnswerRequestDto answerDto);
}

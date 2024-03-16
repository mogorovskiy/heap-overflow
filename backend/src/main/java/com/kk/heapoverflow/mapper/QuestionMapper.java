package com.kk.heapoverflow.mapper;

import com.kk.heapoverflow.config.*;
import com.kk.heapoverflow.dto.question.request.*;
import com.kk.heapoverflow.dto.question.response.*;
import com.kk.heapoverflow.model.*;
import org.mapstruct.Mapper;

@Mapper(config = MapperConfig.class)
public interface QuestionMapper {

    Question toModel(CreateQuestionRequestDto createQuestionRequestDto);

    QuestionResponseDto toDto(Question question);
}

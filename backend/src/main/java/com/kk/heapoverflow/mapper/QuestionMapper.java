package com.kk.heapoverflow.mapper;

import com.kk.heapoverflow.dto.question.QuestionResponseDto;
import com.kk.heapoverflow.config.MapperConfig;
import com.kk.heapoverflow.dto.question.response.QuestionPreviewDto;
import com.kk.heapoverflow.model.Question;
import org.mapstruct.Mapper;

@Mapper(config = MapperConfig.class)
public interface QuestionMapper {

    QuestionResponseDto toDto(Question question);

    QuestionPreviewDto toPreviewDto(Question question);
}

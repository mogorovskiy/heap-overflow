package com.kk.heapoverflow.mapper;

import com.kk.heapoverflow.config.MapperConfig;
import com.kk.heapoverflow.dto.question.request.QuestionRequestDto;
import com.kk.heapoverflow.model.Question;
import org.mapstruct.Mapper;

@Mapper(config = MapperConfig.class)
public interface QuestionMapper {

    Question toModel(QuestionRequestDto questionRequestDto);
}

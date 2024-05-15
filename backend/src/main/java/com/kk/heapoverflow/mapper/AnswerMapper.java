package com.kk.heapoverflow.mapper;

import com.kk.heapoverflow.config.MapperConfig;
import com.kk.heapoverflow.model.Answer;
import org.mapstruct.Mapper;

@Mapper(config = MapperConfig.class)
public interface AnswerMapper {

    Answer toModel(AnswerRequestDto answerRequestDto);
}

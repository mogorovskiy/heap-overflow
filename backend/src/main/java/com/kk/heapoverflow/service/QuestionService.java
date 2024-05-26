package com.kk.heapoverflow.service;

import com.kk.heapoverflow.dto.question.QuestionResponseDto;
import com.kk.heapoverflow.dto.question.request.QuestionRequestDto;
import com.kk.heapoverflow.dto.question.response.QuestionByIdDto;
import com.kk.heapoverflow.dto.question.response.QuestionPreviewPageResponseDto;
import org.springframework.data.domain.Pageable;

public interface QuestionService {

    QuestionByIdDto getQuestionById(Long questionId);

    QuestionPreviewPageResponseDto getQuestionsPreviewPage(Pageable pageable);

    QuestionResponseDto createQuestion(QuestionRequestDto questionRequestDto);
}

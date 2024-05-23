package com.kk.heapoverflow.service;

import com.kk.heapoverflow.dto.question.request.QuestionRequestDto;
import com.kk.heapoverflow.dto.question.response.QuestionByIdDto;
import com.kk.heapoverflow.dto.question.response.QuestionPreviewPageResponseDto;
import com.kk.heapoverflow.model.Question;
import org.springframework.data.domain.Pageable;

public interface QuestionService {

    QuestionByIdDto getQuestionById(Long questionId);

    QuestionPreviewPageResponseDto getQuestionsPreviewPage(Pageable pageable);

    Question createQuestion(QuestionRequestDto questionRequestDto);
}

package com.kk.heapoverflow.service;

import com.kk.heapoverflow.dto.question.response.QuestionPreviewPageResponseDto;
import com.kk.heapoverflow.model.Question;
import org.springframework.data.domain.Pageable;

public interface QuestionService {

    Question getQuestionById(Long questionId);

    QuestionPreviewPageResponseDto getQuestionsPreviewPage(Pageable pageable);
}

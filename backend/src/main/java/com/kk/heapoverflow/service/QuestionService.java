package com.kk.heapoverflow.service;

import com.kk.heapoverflow.dto.question.QuestionResponseDto;
import com.kk.heapoverflow.model.Question;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface QuestionService {
    Page<QuestionResponseDto> getAllQuestions(Pageable pageable);

    Question getQuestionById(Long questionId);
}

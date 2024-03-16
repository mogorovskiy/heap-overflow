package com.kk.heapoverflow.service;

import com.kk.heapoverflow.dto.question.request.*;
import com.kk.heapoverflow.dto.question.response.*;
import com.kk.heapoverflow.model.*;
import org.springframework.data.domain.*;

public interface QuestionService {
    QuestionResponseDto createQuestion(CreateQuestionRequestDto createQuestionRequestDto, User user);

    Page<QuestionResponseDto> getAllQuestions(Pageable pageable);

    Question getQuestionById(Long questionId);

    Question updateQuestion(Long questionId, Question questionDetails);

    void deleteQuestion(Long questionId);
}

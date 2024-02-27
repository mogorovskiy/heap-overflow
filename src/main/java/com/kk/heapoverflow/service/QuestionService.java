package com.kk.heapoverflow.service;

import com.kk.heapoverflow.dto.*;
import com.kk.heapoverflow.model.*;
import org.springframework.data.domain.*;

import java.util.*;

public interface QuestionService {
    Question createQuestion(QuestionRequestDto questionRequestDto);

    Page<Question> getAllQuestions(Pageable pageable);

    Question getQuestionById(Long questionId);

    Question updateQuestion(Long questionId, Question questionDetails);

    void deleteQuestion(Long questionId);
}

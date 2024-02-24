package com.kk.heapoverflow.service;

import com.kk.heapoverflow.model.*;
import org.springframework.stereotype.*;

import java.util.*;

@Service
public interface QuestionService {
    Question createQuestion(QuestionRequestDto questionRequestDto);

    List<Question> getAllQuestions();

    Question getQuestionById(Long questionId);

    Question updateQuestion(Long questionId, Question questionDetails);

    void deleteQuestion(Long questionId);
}

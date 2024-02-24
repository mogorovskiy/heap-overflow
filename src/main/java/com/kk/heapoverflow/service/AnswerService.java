package com.kk.heapoverflow.service;

import com.kk.heapoverflow.model.*;
import org.springframework.stereotype.*;

import java.util.*;

@Service
public interface AnswerService {
    Answer createAnswer(AnswerRequestDto answerRequestDto);

    List<Answer> getAllAnswers();

    Answer getAnswerById(Long answerId);

    Answer updateAnswer(Long answerId, Answer answerDetails);

    void deleteAnswer(Long answerId);
}

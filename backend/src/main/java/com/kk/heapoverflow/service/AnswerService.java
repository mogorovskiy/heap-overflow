package com.kk.heapoverflow.service;

import com.kk.heapoverflow.dto.answer.request.AnswerRequestDto;
import com.kk.heapoverflow.model.Answer;

public interface AnswerService {

    Answer save(AnswerRequestDto answerRequestDto); //TODO: save!
}

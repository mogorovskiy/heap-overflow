package com.kk.heapoverflow.mapper;

import com.kk.heapoverflow.dto.*;
import com.kk.heapoverflow.model.*;
import org.springframework.stereotype.*;

@Service
public class AnswerMapper {
    public Answer toModel(AnswerRequestDto answerRequestDto) {
        Answer answer = new Answer();
        answer.setQuestion(answerRequestDto.getQuestion());
        answer.setUser(answerRequestDto.getUser());
        answer.setContent(answerRequestDto.getContent());
        answer.setCreatedAt(answerRequestDto.getQuestion().getCreatedAt());
        return answer;
    }
}

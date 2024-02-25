package com.kk.heapoverflow.mapper;

import com.kk.heapoverflow.dto.*;
import com.kk.heapoverflow.model.*;
import org.springframework.stereotype.*;

@Service
public class QuestionMapper {
    public Question toModel(QuestionRequestDto questionRequestDto) {
        Question question = new Question();
        question.setTitle(questionRequestDto.getTitle());
        question.setContent(questionRequestDto.getContent());
        question.setUser(questionRequestDto.getUser());
        question.setViews(questionRequestDto.getViews());
        return question;
    }
}

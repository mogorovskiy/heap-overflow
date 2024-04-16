package com.kk.heapoverflow.controller;

import com.kk.heapoverflow.dto.question.QuestionResponseDto;
import com.kk.heapoverflow.model.Question;
import com.kk.heapoverflow.service.QuestionService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/questions")
public class QuestionController {

    private final QuestionService questionService;

    @GetMapping("/getAll")
    public Page<QuestionResponseDto> getAll(Pageable pageable) {
        return questionService.getAllQuestions(pageable);
    }

    @GetMapping("/getById")
    public Question getById(@RequestParam Long id) {
        return questionService.getQuestionById(id);
    }
}

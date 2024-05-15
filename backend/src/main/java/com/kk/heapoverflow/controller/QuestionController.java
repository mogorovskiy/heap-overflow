package com.kk.heapoverflow.controller;

import com.kk.heapoverflow.dto.question.response.QuestionByIdDto;
import com.kk.heapoverflow.dto.question.response.QuestionPreviewPageResponseDto;
import com.kk.heapoverflow.service.QuestionService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/questions")
public class QuestionController {

    private final QuestionService questionService;

    @GetMapping("/{id}")
    public QuestionByIdDto getById(@PathVariable Long id) {
        return questionService.getQuestionById(id);
    }

    @GetMapping("/getPreviewPage")
    public QuestionPreviewPageResponseDto getQuestionsPreviewPage(Pageable pageable) {
        return questionService.getQuestionsPreviewPage(pageable);
    }
}

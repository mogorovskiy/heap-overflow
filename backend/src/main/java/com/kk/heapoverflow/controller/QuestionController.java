package com.kk.heapoverflow.controller;

import com.kk.heapoverflow.dto.question.request.*;
import com.kk.heapoverflow.dto.question.response.*;
import com.kk.heapoverflow.model.*;
import com.kk.heapoverflow.service.*;
import lombok.*;
import lombok.extern.slf4j.*;
import org.springframework.data.domain.*;
import org.springframework.security.core.*;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/questions")
public class QuestionController {
    private final QuestionService questionService;

    @PostMapping("/create")
    public QuestionResponseDto create(@RequestBody CreateQuestionRequestDto createQuestionRequestDto,
                                      Authentication authentication) {
        User user  = (User) authentication.getPrincipal();
        log.info("Create question: {}", createQuestionRequestDto);
        return questionService.createQuestion(createQuestionRequestDto, user);
    }

    @GetMapping("/getAll")
    public Page<QuestionResponseDto> getAll(Pageable pageable) {
        log.info("Get all questions: ");
        return questionService.getAllQuestions(pageable);
    }

    @GetMapping("/getById")
    public Question getById(@RequestParam Long id) {
        log.info("Get question by id: {}", id);
        return questionService.getQuestionById(id);
    }

/*
    @PostMapping("/update")
    public Question update(@RequestParam Long questionId, @RequestBody QuestionRequestDto questionRequestDto) {
        log.info("Update question: {}", questionId);
        return questionService.updateQuestion(questionId, questionRequestDto);
    }
*/

    @DeleteMapping("/delete")
    public void delete(@RequestParam Long questionId) {
        log.info("Delete question: {}", questionId);
        questionService.deleteQuestion(questionId);
    }
}

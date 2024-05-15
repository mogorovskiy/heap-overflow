package com.kk.heapoverflow.controller;

import com.kk.heapoverflow.dto.answer.request.AnswerRequestDto;
import com.kk.heapoverflow.model.Answer;
import com.kk.heapoverflow.service.AnswerService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/answers")
public class AnswerController {

    private final AnswerService answerService;

    @PostMapping("/new")
    public Answer createAnswer(@RequestBody AnswerRequestDto answerRequestDto) {
        return answerService.save(answerRequestDto);
    }
}

package com.kk.heapoverflow.controller;


import com.kk.heapoverflow.service.*;
import lombok.*;
import lombok.extern.slf4j.*;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/questions")
public class QuestionController {
    private final QuestionService questionService;

    @PostMapping("/create")
    public Question create(@RequestBody QuestionRequestDto questionRequestDto) {
        log.info("Create question: {}", questionRequestDto);
        return questionService.createQuestion(questionRequestDto);
    }

    @GetMapping("/getAll")
    public List<Question> getAll() {
        log.info("Get all questions: ");
        return questionService.getAllQuestions();
    }

    @GetMapping("/getById")
    public Question getById(@RequestParam Long id) {
        log.info("Get question by id: {}", id);
        return questionService.getQuestionById(id);
    }

    @PostMapping("/update")
    public Question update(@RequestParam Long questionId, @RequestBody QuestionRequestDto questionRequestDto) {
        log.info("Update question: {}", questionId);
        return questionService.updateQuestion(questionId, questionRequestDto);
    }

    @DeleteMapping("/delete")
    public void delete(@RequestParam Long questionId) {
        log.info("Delete question: {}", questionId);
        questionService.deleteQuestion(questionId);
    }
}

package com.kk.heapoverflow.service.impl;

import com.kk.heapoverflow.dto.question.request.*;
import com.kk.heapoverflow.dto.question.response.*;
import com.kk.heapoverflow.mapper.*;
import com.kk.heapoverflow.model.*;
import com.kk.heapoverflow.repostitory.*;
import com.kk.heapoverflow.service.*;
import lombok.*;
import org.springframework.data.domain.*;
import org.springframework.stereotype.*;

import java.time.*;
import java.util.*;

@Service
@RequiredArgsConstructor
public class QuestionServiceImpl implements QuestionService {
    private final QuestionRepository questionRepository;
    private final QuestionMapper questionMapper;

    @Override
    public QuestionResponseDto createQuestion(CreateQuestionRequestDto createQuestionRequestDto, User user) {
        Question question = questionMapper.toModel(createQuestionRequestDto);
        question.setUser(user);
        question.setCreatedAt(LocalDateTime.now());
        question.setViews(0L);
        return questionMapper.toDto(questionRepository.save(question));
    }

    @Override
    public Page<QuestionResponseDto> getAllQuestions(Pageable pageable) {
        return questionRepository.findAll(pageable)
                .map(questionMapper::toDto);
    }

    @Override
    public Question getQuestionById(Long questionId) {
        Optional<Question> questionOptional = questionRepository.findById(questionId);
        return questionOptional.orElse(null);
    }

    @Override
    public Question updateQuestion(Long questionId, Question questionDetails) {
        Optional<Question> questionOptional = questionRepository.findById(questionId);
        if (questionOptional.isPresent()) {
            Question question = questionOptional.get();
            question.setTitle(questionDetails.getTitle());
            question.setContent(questionDetails.getContent());
            question.setViews(questionDetails.getViews());
            question.setUser(questionDetails.getUser());
            return questionRepository.save(question);
        }
        return null;
    }

    @Override
    public void deleteQuestion(Long questionId) {
        questionRepository.deleteById(questionId);
    }
}

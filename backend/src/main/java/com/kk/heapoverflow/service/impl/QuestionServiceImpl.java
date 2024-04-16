package com.kk.heapoverflow.service.impl;

import com.kk.heapoverflow.dto.question.QuestionResponseDto;
import com.kk.heapoverflow.mapper.QuestionMapper;
import com.kk.heapoverflow.model.Question;
import com.kk.heapoverflow.repostitory.QuestionRepository;
import com.kk.heapoverflow.service.QuestionService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class QuestionServiceImpl implements QuestionService {
    private final QuestionRepository questionRepository;
    private final QuestionMapper questionMapper;

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
}

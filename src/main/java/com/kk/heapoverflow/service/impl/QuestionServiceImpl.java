package com.kk.heapoverflow.service.impl;

import com.kk.heapoverflow.dto.*;
import com.kk.heapoverflow.mapper.*;
import com.kk.heapoverflow.model.*;
import com.kk.heapoverflow.repostitory.*;
import com.kk.heapoverflow.service.*;
import lombok.*;
import org.springframework.data.domain.*;
import org.springframework.stereotype.*;

import java.util.*;

@Service
@RequiredArgsConstructor
public class QuestionServiceImpl implements QuestionService {
    private final QuestionRepository questionRepository;
    private final QuestionMapper questionMapper;

    @Override
    public Question createQuestion(QuestionRequestDto questionRequestDto) {
        Question question = questionMapper.toModel(questionRequestDto);
        return questionRepository.save(question);
    }

    @Override
    public Page<Question> getAllQuestions(Pageable pageable) {
        return questionRepository.findAll(pageable);
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

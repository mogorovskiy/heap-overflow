package com.kk.heapoverflow.service.impl;

import com.kk.heapoverflow.dto.*;
import com.kk.heapoverflow.mapper.*;
import com.kk.heapoverflow.model.*;
import com.kk.heapoverflow.repostitory.*;
import com.kk.heapoverflow.service.*;
import lombok.*;
import org.springframework.stereotype.*;

import java.util.*;

@Service
@RequiredArgsConstructor
public class AnswerServiceImpl implements AnswerService {
    private final AnswerRepository answerRepository;
    private final AnswerMapper answerMapper;

    @Override
    public Answer createAnswer(AnswerRequestDto answerRequestDto) {
        Answer answer = answerMapper.toModel(answerRequestDto);
        return answerRepository.save(answer);
    }

    @Override
    public List<Answer> getAllAnswers() {
        return answerRepository.findAll();
    }

    @Override
    public Answer getAnswerById(Long answerId) {
        Optional<Answer> answerOptional = answerRepository.findById(answerId);
        return answerOptional.orElse(null);
    }

    @Override
    public Answer updateAnswer(Long answerId, Answer answerDetails) {
        Optional<Answer> answerOptional = answerRepository.findById(answerId);
        if (answerOptional.isPresent()) {
            Answer answer = answerOptional.get();
            answer.setContent(answerDetails.getContent());
            answer.setUser(answerDetails.getUser());
            answer.setQuestion(answerDetails.getQuestion());
            return answerRepository.save(answer);
        }
        return null;
    }

    @Override
    public void deleteAnswer(Long answerId) {
        answerRepository.deleteById(answerId);
    }
}

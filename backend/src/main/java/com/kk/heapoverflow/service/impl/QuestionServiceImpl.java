package com.kk.heapoverflow.service.impl;

import com.kk.heapoverflow.dto.question.response.QuestionAuthorMetadataDto;
import com.kk.heapoverflow.dto.question.response.QuestionByIdDto;
import com.kk.heapoverflow.dto.question.response.QuestionMetadataDto;
import com.kk.heapoverflow.dto.question.response.QuestionPreviewDto;
import com.kk.heapoverflow.dto.question.response.QuestionPreviewPageResponseDto;
import com.kk.heapoverflow.dto.question.response.QuestionTagDto;
import com.kk.heapoverflow.model.Question;
import com.kk.heapoverflow.model.User;
import com.kk.heapoverflow.repostitory.AnswerRepository;
import com.kk.heapoverflow.repostitory.QuestionRepository;
import com.kk.heapoverflow.service.QuestionService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class QuestionServiceImpl implements QuestionService {

    private final QuestionRepository questionRepository;
    private final AnswerRepository answerRepository;
    private static final int MAX_CONTENT_PREVIEW_LENGTH = 100;

    @Override
    public QuestionByIdDto getQuestionById(Long questionId) {
        Optional<Question> questionOptional = questionRepository.findById(questionId);
        Question question = questionOptional.get();

        return mapToQuestionDto(question);
    }

    private QuestionByIdDto mapToQuestionDto(Question question) {
        QuestionByIdDto questionDto = new QuestionByIdDto();
        questionDto.setId(question.getId());
        questionDto.setTitle(question.getTitle());
        questionDto.setContent(question.getContent());
        questionDto.setAskedAt(question.getAskedAt());
        questionDto.setAuthor(mapToAuthorMetadataDto(question.getAuthor()));
        questionDto.setTags(mapToTagDtos(question.getTags()));
        questionDto.setMetadata(mapToMetadataDto(question));
        questionDto.setAnswers(mapToAnswerDto(question.getAnswers()));
        return questionDto;
    }

    @Override
    public QuestionPreviewPageResponseDto getQuestionsPreviewPage(Pageable pageable) {
        Page<Question> questionPage = questionRepository.findAll(pageable);
        List<QuestionPreviewDto> questionPreviews = questionPage.getContent().stream()
                .map(question -> mapToQuestionPreviewDto(question)).toList();

        QuestionPreviewPageResponseDto pageDto = new QuestionPreviewPageResponseDto();
        pageDto.setTotal(questionPage.getTotalElements());
        pageDto.setPagesAmount((long) questionPage.getTotalPages());
        pageDto.setCurrentPage((long) pageable.getPageNumber());
        pageDto.setSize((long) pageable.getPageSize());
        pageDto.setData(questionPreviews);

        return pageDto;
    }

    private QuestionAuthorMetadataDto mapToAuthorMetadataDto(User user) {
        QuestionAuthorMetadataDto questionAuthorMetadataDto = new QuestionAuthorMetadataDto();

        questionAuthorMetadataDto.setFirstName(user.getFirstName());
        questionAuthorMetadataDto.setLastName(user.getLastName());
        questionAuthorMetadataDto.setId(user.getId());
        questionAuthorMetadataDto.setProfilePhotoUrl(user.getProfilePhotoUrl());

        return questionAuthorMetadataDto;
    }

    private QuestionMetadataDto mapToMetadataDto(Question question) {
        QuestionMetadataDto questionMetadataDto = new QuestionMetadataDto();

        questionMetadataDto.setAnswers(answerRepository.countByQuestionId(question.getId()));
        questionMetadataDto.setViews(question.getViews());
        questionMetadataDto.setRating(question.getRating());

        return questionMetadataDto;
    }

    private QuestionPreviewDto mapToQuestionPreviewDto(Question question) {
        QuestionPreviewDto previewDto = new QuestionPreviewDto();
        previewDto.setId(question.getId());
        previewDto.setTitle(question.getTitle());
        previewDto.setContentShort(question.getContent().substring(0, Math.min(question.getContent().length(), MAX_CONTENT_PREVIEW_LENGTH)));
        previewDto.setAskedAt(question.getCreatedAt());
        previewDto.setTags(question.getTags().stream().map(tag -> new QuestionTagDto(tag.getName())).toArray(QuestionTagDto[]::new));
        previewDto.setAuthor(mapToAuthorMetadataDto(question.getAuthor()));
        previewDto.setMetadata(mapToMetadataDto(question));
        return previewDto;
    }
}

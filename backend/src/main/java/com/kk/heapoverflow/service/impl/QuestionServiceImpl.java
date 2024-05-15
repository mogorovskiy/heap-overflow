package com.kk.heapoverflow.service.impl;

import com.kk.heapoverflow.dto.answer.response.AnswerAuthorMetadataDto;
import com.kk.heapoverflow.dto.answer.response.AnswerMainDto;
import com.kk.heapoverflow.dto.answer.response.AnswerMetadataDto;
import com.kk.heapoverflow.dto.question.response.QuestionAuthorMetadataDto;
import com.kk.heapoverflow.dto.question.response.QuestionByIdDto;
import com.kk.heapoverflow.dto.question.response.QuestionMetadataDto;
import com.kk.heapoverflow.dto.question.response.QuestionPreviewDto;
import com.kk.heapoverflow.dto.question.response.QuestionPreviewPageResponseDto;
import com.kk.heapoverflow.dto.question.response.QuestionTagDto;
import com.kk.heapoverflow.model.Answer;
import com.kk.heapoverflow.model.Question;
import com.kk.heapoverflow.model.User;
import com.kk.heapoverflow.repostitory.AnswerRepository;
import com.kk.heapoverflow.repostitory.QuestionRepository;
import com.kk.heapoverflow.service.QuestionService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;
import java.util.NoSuchElementException;
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

        return mapToQuestionDto(questionOptional.orElseThrow(() -> new NoSuchElementException("No question in id: " + questionId)));
    }

    private QuestionByIdDto mapToQuestionDto(Question question) {
        QuestionByIdDto questionDto = new QuestionByIdDto();

        questionDto.setId(question.getId());
        questionDto.setTitle(question.getTitle());
        questionDto.setContent(question.getContent());
        questionDto.setAskedAt(question.getCreatedAt());
        questionDto.setAuthor(mapQuestionToAuthorMetadataDto(question.getAuthor()));
        questionDto.setTags(Arrays.stream(question.getTags().stream().map(tag ->
                new QuestionTagDto(tag.getName())).toArray(QuestionTagDto[]::new)).toList());
        questionDto.setMetadata(mapToQuestionMetadataDto(question));
        questionDto.setAnswers(question.getAnswers().stream()
                .map(this::mapToAnswerDto)
                .toList());

        return questionDto;
    }

    private AnswerMainDto mapToAnswerDto(Answer answer) {
        AnswerMainDto answerMainDto = new AnswerMainDto();

        answerMainDto.setId(answer.getId());
        answerMainDto.setCreatedAt(answer.getCreatedAt());
        answerMainDto.setAuthor(mapAnswerToAuthorMetadataDto(answer.getAuthor()));
        answerMainDto.setContent(answer.getContent());
        answerMainDto.setMetadata(mapToAnswerMetadataDto(answer));

        return answerMainDto;
    }

    private AnswerMetadataDto mapToAnswerMetadataDto(Answer answer) {
        AnswerMetadataDto answerMetadataDto = new AnswerMetadataDto();

        answerMetadataDto.setAnswers(answerRepository.countByQuestionId(answer.getId()));
        answerMetadataDto.setViews(answer.getViews());
        answerMetadataDto.setRating(answer.getRating());

        return answerMetadataDto;
    }

    private AnswerAuthorMetadataDto mapAnswerToAuthorMetadataDto(User user) {
        AnswerAuthorMetadataDto answerAuthorMetadataDto = new AnswerAuthorMetadataDto();

        answerAuthorMetadataDto.setFirstName(user.getFirstName());
        answerAuthorMetadataDto.setLastName(user.getLastName());
        answerAuthorMetadataDto.setId(user.getId());
        answerAuthorMetadataDto.setProfilePhotoUrl(user.getProfilePhotoUrl());

        return answerAuthorMetadataDto;
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

    private QuestionPreviewDto mapToQuestionPreviewDto(Question question) {
        QuestionPreviewDto previewDto = new QuestionPreviewDto();
        previewDto.setId(question.getId());
        previewDto.setTitle(question.getTitle());
        previewDto.setContentShort(question.getContent().substring(0, Math.min(question.getContent().length(), MAX_CONTENT_PREVIEW_LENGTH)));
        previewDto.setAskedAt(question.getCreatedAt());
        previewDto.setTags(question.getTags().stream().map(tag -> new QuestionTagDto(tag.getName())).toArray(QuestionTagDto[]::new));
        previewDto.setAuthor(mapQuestionToAuthorMetadataDto(question.getAuthor()));
        previewDto.setMetadata(mapToQuestionMetadataDto(question));

        return previewDto;
    }

    private QuestionAuthorMetadataDto mapQuestionToAuthorMetadataDto(User user) {
        QuestionAuthorMetadataDto questionAuthorMetadataDto = new QuestionAuthorMetadataDto();

        questionAuthorMetadataDto.setFirstName(user.getFirstName());
        questionAuthorMetadataDto.setLastName(user.getLastName());
        questionAuthorMetadataDto.setId(user.getId());
        questionAuthorMetadataDto.setProfilePhotoUrl(user.getProfilePhotoUrl());

        return questionAuthorMetadataDto;
    }

    private QuestionMetadataDto mapToQuestionMetadataDto(Question question) {
        QuestionMetadataDto questionMetadataDto = new QuestionMetadataDto();

        questionMetadataDto.setAnswers(answerRepository.countByQuestionId(question.getId()));
        questionMetadataDto.setViews(question.getViews());
        questionMetadataDto.setRating(question.getRating());

        return questionMetadataDto;
    }
}

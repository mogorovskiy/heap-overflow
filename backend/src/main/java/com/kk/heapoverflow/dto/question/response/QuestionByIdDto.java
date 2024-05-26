package com.kk.heapoverflow.dto.question.response;

import com.kk.heapoverflow.dto.answer.response.AnswerMainDto;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;

@Data
public class QuestionByIdDto {

    private Long id;
    private String title;
    private String content;
    private LocalDateTime askedAt;
    private List<QuestionTagDto> tags;
    private QuestionAuthorMetadataDto author;
    private QuestionMetadataDto metadata;
    private List<AnswerMainDto> answers;
}

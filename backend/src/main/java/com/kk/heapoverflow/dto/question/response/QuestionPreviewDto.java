package com.kk.heapoverflow.dto.question.response;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class QuestionPreviewDto {
    private Long id;
    private String title;
    private String contentShort;
    private LocalDateTime askedAt;
    private QuestionTagDto[] tags;
    private QuestionAuthorMetadataDto author;
    private QuestionMetadataDto metadata;
}

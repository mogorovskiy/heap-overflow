package com.kk.heapoverflow.dto.question.response;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class QuestionPreviewDto {

    private Long id;
    private String title;
    private String contentShort;
    private  LocalDateTime askedAt;
    private  QuestionTagDto[] tags;
    private  QuestionAuthorMetadataDto author;
    private  QuestionMetadataDto metadata;
}

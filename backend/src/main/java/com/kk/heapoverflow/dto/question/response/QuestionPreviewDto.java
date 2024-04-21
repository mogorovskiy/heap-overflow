package com.kk.heapoverflow.dto.question.response;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class QuestionPreviewDto {

    Long id;
    String title;
    String contentShort;
    String askedAt;
    QuestionTagDto[] tags;
    QuestionAuthorMetadataDto author;
    QuestionMetadataDto metadata;
}

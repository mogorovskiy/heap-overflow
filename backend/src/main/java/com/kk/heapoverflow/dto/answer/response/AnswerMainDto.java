package com.kk.heapoverflow.dto.answer.response;

import lombok.Data;

@Data
public class AnswerMainDto {

    private int id;
    private String content;
    private String createdAt;
    private AnswerAuthorMetadataDto author;
    private AnswerMetadataDto metadata;
}

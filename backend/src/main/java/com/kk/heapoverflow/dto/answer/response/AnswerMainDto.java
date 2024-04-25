package com.kk.heapoverflow.dto.answer.response;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class AnswerMainDto {

    private long id;
    private String content;
    private LocalDateTime createdAt;
    private AnswerAuthorMetadataDto author;
    private AnswerMetadataDto metadata;
}

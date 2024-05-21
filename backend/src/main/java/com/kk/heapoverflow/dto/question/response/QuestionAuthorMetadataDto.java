package com.kk.heapoverflow.dto.question.response;

import lombok.Data;

@Data
public class QuestionAuthorMetadataDto {

    private Long id;
    private String firstName;
    private String lastName;
    private String profilePhotoUrl;
}

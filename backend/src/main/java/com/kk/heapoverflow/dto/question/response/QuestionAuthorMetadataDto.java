package com.kk.heapoverflow.dto.question.response;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class QuestionAuthorMetadataDto {

    private Long id;
    private String firstName;
    private String lastName;
    private String profilePhotoUrl;
}

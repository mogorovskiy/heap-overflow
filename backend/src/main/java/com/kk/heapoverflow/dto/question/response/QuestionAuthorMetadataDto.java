package com.kk.heapoverflow.dto.question.response;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class QuestionAuthorMetadataDto {

    Long id;
    String firstName;
    String lastName;
    String profilePhotoUrl;
}

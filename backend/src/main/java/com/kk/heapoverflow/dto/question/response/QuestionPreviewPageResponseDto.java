package com.kk.heapoverflow.dto.question.response;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class QuestionPreviewPageResponseDto {

    Long total;
    Long pagesAmount;
    Long currentPage;
    Long size;
    List<QuestionPreviewDto> data;
}

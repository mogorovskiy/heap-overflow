package com.kk.heapoverflow.dto.question.response;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class QuestionPreviewPageResponseDto {

    private Long total;
    private Long pagesAmount;
    private Long currentPage;
    private Long size;
    private List<QuestionPreviewDto> data;
}

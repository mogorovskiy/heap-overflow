package com.kk.heapoverflow.dto.question.response;

import lombok.Data;

import java.util.List;

@Data
public class QuestionPreviewPageResponseDto {

    private Long total;
    private Long pagesAmount;
    private Long currentPage;
    private Long size;
    private List<QuestionPreviewDto> data;
}

import {QuestionPreviewDto} from "../question/preview/QuestionPreviewDto";

// first page = 0
export interface QuestionPreviewPageableDto {
    total: number,
    pagesAmount: number,
    currentPage: number,
    size: number,
    data: QuestionPreviewDto[]
}

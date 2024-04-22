import {UserMetadataDto} from "../../UserMetadataDto";
import {QuestionMetadataDto} from "./preview/QuestionMetadataDto";
import {AnswerDto} from "../../answer/response/AnswerDto";
import {TagResponseDto} from "../../tag/response/TagResponseDto";

export interface QuestionDto {
    id: number,
    title: string,
    content: string,
    askedAt: string,
    tags: TagResponseDto[],
    author: UserMetadataDto,
    metadata: QuestionMetadataDto,
    answers: AnswerDto[],
}

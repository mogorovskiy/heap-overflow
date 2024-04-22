import {TagDto} from "../TagDto";
import {UserMetadataDto} from "../UserMetadataDto";
import {QuestionMetadataDto} from "./preview/QuestionMetadataDto";
import {AnswerDto} from "../AnswerDto";

export interface QuestionDto {
    id: number,
    title: string,
    content: string,
    askedAt: string,
    tags: TagDto[],
    author: UserMetadataDto,
    metadata: QuestionMetadataDto,
    answers: AnswerDto[],
}

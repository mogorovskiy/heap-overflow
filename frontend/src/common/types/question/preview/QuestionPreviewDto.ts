import {QuestionMetadataDto} from "./QuestionMetadataDto";
import {QuestionAuthorMetadataDto} from "./QuestionAuthorMetadataDto";
import {TagDto} from "../../TagDto";

export interface QuestionPreviewDto {
    id: number,
    title: string,
    contentShort: string,
    askedAt: string,
    tags: TagDto[],
    author: QuestionAuthorMetadataDto,
    metadata: QuestionMetadataDto,
}

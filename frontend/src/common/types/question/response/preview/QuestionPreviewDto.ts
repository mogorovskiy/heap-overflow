import {QuestionMetadataDto} from "./QuestionMetadataDto";
import {UserMetadataDto} from "../../../UserMetadataDto";
import {TagResponseDto} from "../../../tag/response/TagResponseDto";

export interface QuestionPreviewDto {
    id: number,
    title: string,
    contentShort: string,
    askedAt: string,
    tags: TagResponseDto[],
    author: UserMetadataDto,
    metadata: QuestionMetadataDto,
}

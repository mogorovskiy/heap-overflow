import {QuestionMetadataDto} from "./QuestionMetadataDto";
import {UserMetadataDto} from "../../UserMetadataDto";
import {TagDto} from "../../TagDto";

export interface QuestionPreviewDto {
    id: number,
    title: string,
    contentShort: string,
    askedAt: string,
    tags: TagDto[],
    author: UserMetadataDto,
    metadata: QuestionMetadataDto,
}

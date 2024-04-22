import {UserMetadataDto} from "../UserMetadataDto";
import {AnswerMetadataDto} from "./AnswerMetadataDto";

export interface AnswerDto {
    id: number,
    content: string,
    createdAt: string,
    author: UserMetadataDto,
    metadata: AnswerMetadataDto,
}

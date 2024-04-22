import {UserMetadataDto} from "./UserMetadataDto";

export interface AnswerDto {
    id: number,
    content: string,
    author: UserMetadataDto,
}

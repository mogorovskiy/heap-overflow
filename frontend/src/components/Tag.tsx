import {TagResponseDto} from "../common/types/tag/response/TagResponseDto";

interface TagProps {
    data: TagResponseDto
}

export default function Tag({data}: TagProps) {
    return <span className="badge bg-primary-subtle text-black mb-auto">{data.name}</span>;
}

import {TagDto} from "../common/types/TagDto";

interface TagProps {
    data: TagDto
}

export default function Tag({data}: TagProps) {
    return <span className="badge bg-primary-subtle text-black mb-auto">{data.name}</span>;
}

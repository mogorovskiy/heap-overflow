import Tag from "./Tag";
import React from "react";
import {TagResponseDto} from "../common/types/tag/response/TagResponseDto";

interface TagsProps {
    data: TagResponseDto[];
}

export default function Tags({data}: TagsProps) {
    return (<div className="flex flex-row gap-x-2">
        {data.map((tag, i) => <Tag key={i} data={tag} />)}
    </div>);
}

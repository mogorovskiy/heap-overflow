import {TagDto} from "../common/types/TagDto";
import Tag from "./Tag";
import React from "react";

interface TagsProps {
    data: TagDto[];
}

export default function Tags({data}: TagsProps) {
    return (<div className="flex flex-row gap-x-2">
        {data.map((tag, i) => <Tag key={i} data={tag} />)}
    </div>);
}

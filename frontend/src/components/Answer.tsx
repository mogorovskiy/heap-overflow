import {formatDateTime} from "../common/utils";
import {PAGES} from "../common/constants";
import React, {useEffect, useState} from "react";
import {AnswerDto} from "../common/types/answer/response/AnswerDto";
import {marked} from "marked";

interface AnswerProps {
    data: AnswerDto
}

export default function Answer({data}: AnswerProps) {
    const [markdownParsed, setMarkdownParsed] = useState("");

    useEffect(() => {
        const parseMarkdown = async () => {
            const html = await marked(data.content);
            setMarkdownParsed(html);
        };

        parseMarkdown();
    }, []);

    return (<>
        <div className="flex flex-row gap-x-3 mt-5">
            <div className="text-center flex flex-col gap-y-3 px-2">
                <button className="border h-12 w-12" style={{borderRadius: "50%"}}>
                    <svg aria-hidden="true" className="mx-auto" width="18" height="18"
                         viewBox="0 0 18 18">
                        <path d="M1 12h16L9 4l-8 8Z"></path>
                    </svg>
                </button>
                <h4 className="my-0">{data.metadata.rating}</h4>
                <button className="border h-12 w-12" style={{borderRadius: "50%"}}>
                    <svg aria-hidden="true" className="mx-auto" width="18" height="18"
                         viewBox="0 0 18 18">
                        <path d="M1 6h16l-8 8-8-8Z"></path>
                    </svg>
                </button>
            </div>
            <div className="flex flex-col">
                <p dangerouslySetInnerHTML={{ __html: markdownParsed}} className="markdown" />
                <div className="flex justify-content-end mt-3">
                    <div className="rounded p-2 small">
                        <span className="text-secondary">answered {formatDateTime(data.createdAt)}</span>
                        <div className="flex flex-row align-items-center gap-x-2">
                            <img src={data.author.profilePhotoUrl}
                                 alt="" className="w-5 h-5" />
                            <a href={PAGES.users + "/" + data.author.id} className="text-decoration-none">
                                {data.author.firstName} {data.author.lastName}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <hr />
        </>
    );
}

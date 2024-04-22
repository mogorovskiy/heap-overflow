import {QuestionPreviewDto} from "../common/types/question/response/preview/QuestionPreviewDto";
import {PAGES} from "../common/constants";
import {calcHowLongAgoWasCreated} from "../common/utils";
import React from "react";
import Tags from "./Tags";

export default function QuestionPreview({data} : { data: QuestionPreviewDto }) {
    return (
        <div className="border-t">
            <div className="flex flex-row gap-x-3 py-3">
                <div className="flex flex-col text-secondary small text-end pl-12 py-2">
                    <div>
                        <span className="mr-1">{data.metadata.rating}</span>
                        <span>rating</span>
                    </div>
                    <div>
                        <span className="mr-1">{data.metadata.answers}</span>
                        <span>answers</span>
                    </div>
                    <div>
                        <span className="mr-1">{data.metadata.views}</span>
                        <span>views</span>
                    </div>
                </div>
                <div className="flex flex-col text-start pr-3">
                    <a href={PAGES.questions + "/" + data.id} className="text-decoration-none">{data.title}</a>
                    <div className="small">
                        <span>{data.contentShort} ...</span>
                    </div>
                    <div className="flex flex-row justify-content-between mt-1">
                        <Tags data={data.tags}/>
                        <div className="flex flex-row flex-wrap align-items-center justify-content-end gap-x-1 small text-end">
                            <img src={data.author.profilePhotoUrl}
                                 alt="" className="w-4 h-4" />
                            <a href={PAGES.users + "/" + data.author.id} className="text-decoration-none">{data.author.firstName} {data.author.lastName}</a>
                            <div className="text-secondary">
                                <span>asked {calcHowLongAgoWasCreated(data.askedAt)}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

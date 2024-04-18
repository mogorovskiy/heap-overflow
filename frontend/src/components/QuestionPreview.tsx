import {QuestionPreviewDto} from "../common/types/question/preview/QuestionPreviewDto";
import {PAGES} from "../common/constants";
import {calcHowLongAgoWasCreated} from "../common/utils";

export default function QuestionPreview({data} : { data: QuestionPreviewDto }) {
    return (
        <div className="border-t">
            <div className="flex flex-row gap-x-3 py-3">
                <div className="flex flex-col text-secondary small text-end pl-12 py-2">
                    <div>
                        <span className="mr-1">{data.metadata.votes}</span>
                        <span>votes</span>
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
                        <span className="mr-1">{data.contentShort}</span>
                        <span>...</span>
                    </div>
                    <div className="flex flex-row justify-content-between mt-1">
                        <div className="flex flex-row gap-x-2">
                            {data.tags.map((tag, i) =>
                                <span key={i} className="badge bg-cyan-100 text-black mb-auto">{tag.name}</span>)}
                        </div>
                        <div className="flex flex-row flex-wrap align-items-center justify-content-end gap-x-1 small text-end">
                            <img src={data.author.profilePhotoUrl}
                                 alt="" className="w-4 h-4" />
                            <a href={PAGES.users + "/" + data.author.id} className="text-decoration-none">{data.author.firstName} {data.author.lastName}</a>
                            <div className="text-secondary">
                                <span className="mr-1">asked</span>
                                <span className="mr-1">{calcHowLongAgoWasCreated(data.askedAt)}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

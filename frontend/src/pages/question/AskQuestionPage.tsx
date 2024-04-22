import React, {FormEvent, useState} from "react";
import PageWithHeader from "../PageWithHeader";
import TextareaMarkdownEditor from "../../components/TextareaMarkdownEditor";
import {CreateQuestionRequest} from "../../common/types/question/request/CreateQuestionRequest";
import InputDropdown, {SelectOption} from "../../components/InputDropdown";
import {TagRequestDto} from "../../common/types/tag/request/TagRequestDto";
import {API_ENDPOINTS} from "../../common/constants";
import {doGetRequestReturnJson} from "../../api/doGetRequestReturnJson";

export default function AskQuestionPage() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [tagOptions, setTagOptions]: [SelectOption[], any] = useState([]);
    const [selectedTagOptionValue, setSelectedTagOptionValue] = useState("");

    const handleTagChange = (inputValue: string) => {
        setTagOptions([]);
        if (inputValue && inputValue.length > 0) {
            doGetRequestReturnJson(API_ENDPOINTS.getSearchTag + "/" + inputValue)
                .then(response => {
                    if (response && response.length > 0) {
                        const newTagOptions = response
                            .map((tag: TagRequestDto) => { return {
                                value: "" + tag.id,
                                label: tag.name,
                            }});
                        setTagOptions(newTagOptions);
                    }
                });
        }
    };

    const submitQuestion = (event: FormEvent) => {
        event.preventDefault();

        const requestBody : CreateQuestionRequest = {
            title,
            content
        }

        console.log("POST QUESTION: ", requestBody)
    };

    const contentElement = <div className="col-8 mx-auto pt-5">
        <h2>Ask a public question</h2>
        <form className="flex flex-col gap-y-3" onSubmit={submitQuestion}>
            <div className="card card-body p-4">
                <h5 className="m-0">Title</h5>
                <p className="text-muted small m-0 mb-1 p-0">
                    Be specific and imagine you’re asking a question to another person.
                </p>
                <input type="text" className="form-control" required
                       value={title} onChange={({target}) => setTitle(target.value)} />
            </div>
            <div className="card card-body p-4">
                <h5 className="m-0">What are the details of your problem?</h5>
                <p className="text-muted small m-0 mb-1 p-0">
                    Introduce the problem and expand on what you put in the title. Minimum 20 characters.
                </p>
                <TextareaMarkdownEditor handleChange={setContent} />
            </div>
            <div className="card card-body p-4">
                <h5 className="m-0">Tags</h5>
                <p className="text-muted small m-0 mb-1 p-0">
                    Add up to 5 tags to describe what your question is about. Start typing to see suggestions.
                </p>
                <InputDropdown options={tagOptions} handleChange={handleTagChange} handleSelect={setSelectedTagOptionValue} />
            </div>
            <button type="submit" className="btn btn-primary mr-auto">Post Your Question</button>
        </form>
    </div>;

    return <PageWithHeader contentElement={contentElement} />;
}

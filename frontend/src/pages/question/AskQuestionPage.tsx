import React, {useState} from "react";
import PageWithHeader from "../PageWithHeader";
import TextareaMarkdownEditor from "../../components/TextareaMarkdownEditor";

export default function AskQuestionPage() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const contentElement = <div className="col-8 mx-auto pt-5">
        <h2>Ask a public question</h2>
        <form className="flex flex-col gap-y-3">
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

            </div>
            <button type="submit" className="btn btn-primary mr-auto">Submit question</button>
        </form>
    </div>;

    return <PageWithHeader contentElement={contentElement} />;
}

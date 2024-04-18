import PageWithHeader from "./PageWithHeader";
import QuestionPreview from "../components/QuestionPreview";
import {QuestionPreviewPageableDto} from "../common/types/pageable/QuestionPreviewPageableDto";

const response: QuestionPreviewPageableDto = {
    total: 100,
    pagesAmount: 20,
    currentPage: 0,
    size: 5,
    data: [
        {
            id: 1,
            title: "How do I convert a tflite action recognition model to a coreml model using coremltools convert?",
            contentShort: "I have a tflite model stored in a variable tflite_model. I used transfer learning to train the action recognition model MoViNet on a custom dataset, and I'd like to use this model in an Xcode project.",
            askedAt: "2024-04-18 23:59:59.199999",
            tags: [
                {name: "python"},
                {name: "tensorflow"},
                {name: "coreml"},
                {name: "flite"},
                {name: "coremtools"},
            ],
            author: {
                id: 1,
                firstName: "Renan",
                lastName: "Casse",
                profilePhotoUrl: "https://www.gravatar.com/avatar/3514f42c8a7ebb09d4e96710f7a5fc5d?s=32&d=identicon&r=PG&f=y&so-version=2"
            },
            metadata: {
                votes: 0,
                answers: 2,
                views: 0,
            },
        }
    ]
};

export default function QuestionsPage() {
    const contentElement = <div className="text-center col-7 mx-auto border-l">
        <div className="px-4">
            <div className="flex flex-row justify-content-between py-4">
                <span className="display-6" style={{fontSize: "2.2rem"}}>All questions</span>
                <a href="#" className="btn btn-primary">Ask Question</a>
            </div>
            <div className="flex flex-row justify-content-between pt-2">
                <div>
                    <span className="mr-1">{response.total}</span>
                    <span>questions</span>
                </div>
                <span className="text-danger">add sorting, filters here...</span>
            </div>
        </div>
        <div className="col">
            {response.data.map((q, i) => <QuestionPreview key={i} data={q} />)}
        </div>
    </div>;

    return <PageWithHeader contentElement={contentElement} />;
}

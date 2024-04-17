import PageWithHeader from "./PageWithHeader";

export default function QuestionsPage() {
    const contentElement = <div className="px-4 text-center col-7 mx-auto border-l">
        <div className="flex flex-row justify-content-between py-4">
            <span className="display-6" style={{fontSize: "2.2rem"}}>All questions</span>
            <a href="#" className="btn btn-primary">Ask Question</a>
        </div>
        <div className="flex flex-row justify-content-between pt-2">
            <div>
                <span className="mr-1">24,139,190</span>
                <span>questions</span>
            </div>
            <span className="text-danger">add sorting/filters here...</span>
        </div>
    </div>;

    return <PageWithHeader contentElement={contentElement} />;
}

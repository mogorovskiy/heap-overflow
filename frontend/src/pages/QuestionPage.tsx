import PageWithHeader from "./PageWithHeader";
import {useParams} from "react-router-dom";

export default function QuestionPage() {
    const { questionId } = useParams();

    const contentElement = <div className="text-center col-7 mx-auto border-l">
        #{questionId} QUESTION PAGE
    </div>;

    return <PageWithHeader contentElement={contentElement} />;
}

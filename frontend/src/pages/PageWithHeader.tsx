import {ReactElement} from "react";
import Header from "../components/Header";

interface PageWithHeaderProps {
    contentElement: ReactElement;
}

export default function PageWithHeader({contentElement} : PageWithHeaderProps) {
    return (
        <div>
            <Header />
            <div>
                {contentElement}
            </div>
        </div>
    );
}

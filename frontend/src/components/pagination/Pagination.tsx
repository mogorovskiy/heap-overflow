import {createNumberList} from "../../common/utils";
import PaginationButton from "./PaginationButton";

interface PaginationProps {
    pagesAmount: number;
    currentPage: number;
    onClickCallback: any;
}

export default function Pagination({pagesAmount, currentPage, onClickCallback}: PaginationProps) {
    const START_PAGE = 1;
    const MAX_CONSECUTIVE_BUTTONS = 5;

    const currentPageNormalized = currentPage + START_PAGE;
    const pageButtons: number[] = [];

    if (currentPageNormalized < MAX_CONSECUTIVE_BUTTONS) {
        pageButtons.push(...createNumberList(START_PAGE, MAX_CONSECUTIVE_BUTTONS));
    } else {
        pageButtons.push(START_PAGE);

        const half = Math.floor(MAX_CONSECUTIVE_BUTTONS / 2);
        pageButtons.push(...createNumberList(currentPageNormalized - half, currentPageNormalized + half));
    }
    pageButtons.push(pagesAmount);

    const buttons = [];
    let keyCounter = 0;
    for (let i = 0; i < pageButtons.length; i++) {
        if (i > 0 && pageButtons[i] - pageButtons[i - 1] > 1) {
            buttons.push(<span key={keyCounter++}>...</span>);
        }
        buttons.push(<PaginationButton key={keyCounter++} pageNumber={pageButtons[i]} currentPage={currentPageNormalized}
                                       onClickCallback={() => onClickCallback(pageButtons[i])} />);
    }
    return (<div className="flex flex-row flex-wrap justify-content-center">
        {buttons}
    </div>);
}

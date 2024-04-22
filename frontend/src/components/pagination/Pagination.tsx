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

    const currentPageNormalized = currentPage;

    const createPageNumbers = () => {
        const pageButtons: number[] = [];
        const half = Math.floor(MAX_CONSECUTIVE_BUTTONS / 2);
        if (currentPageNormalized < MAX_CONSECUTIVE_BUTTONS) {
            pageButtons.push(...createNumberList(START_PAGE, MAX_CONSECUTIVE_BUTTONS));
            pageButtons.push(pagesAmount);
        } else if (currentPageNormalized > pagesAmount - MAX_CONSECUTIVE_BUTTONS + 1) {
            pageButtons.push(START_PAGE);
            pageButtons.push(...createNumberList(pagesAmount - MAX_CONSECUTIVE_BUTTONS + 1, pagesAmount));
        } else {
            pageButtons.push(START_PAGE);
            pageButtons.push(...createNumberList(currentPageNormalized - half, currentPageNormalized + half));
            pageButtons.push(pagesAmount);
        }
        return pageButtons;
    };

    const pageButtons: number[] = createPageNumbers();

    const isGap = (pageButtons: number[], i: number) => {
        return i > 0 && pageButtons[i] - pageButtons[i - 1] > 1;
    };

    const createButtons = () => {
        const buttons = [];
        let keyCounter = 0;

        if (currentPageNormalized != START_PAGE) {
            const prevPageNumber = currentPageNormalized - 1;
            buttons.push(<PaginationButton key={keyCounter++} value={prevPageNumber} selectedValue={currentPageNormalized}
                                           onClickCallback={() => onClickCallback(prevPageNumber)} name="Prev" />);
        }
        for (let i = 0; i < pageButtons.length; i++) {
            if (isGap(pageButtons, i)) {
                buttons.push(<button key={keyCounter++} className="mx-2 unselectable" disabled>...</button>);
            }
            buttons.push(<PaginationButton key={keyCounter++} value={pageButtons[i]} selectedValue={currentPageNormalized}
                                           onClickCallback={() => onClickCallback(pageButtons[i])} />);
        }
        if (currentPageNormalized != pagesAmount) {
            const nextPageNumber = currentPageNormalized + 1;
            buttons.push(<PaginationButton key={keyCounter++} value={nextPageNumber} selectedValue={currentPageNormalized}
                                           onClickCallback={() => onClickCallback(nextPageNumber)} name="Next" />);
        }

        return buttons;
    };

    return (<div className="flex flex-row flex-wrap justify-content-center">
        {createButtons()}
    </div>);
}

import {createNumberList} from "../../common/utils";
import PaginationButton from "./PaginationButton";

interface PaginationProps {
    pagesAmount: number;
    currentPage: number;
    onClickCallback: any;
}

export default function Pagination({pagesAmount, currentPage, onClickCallback}: PaginationProps) {
    return (<div className="flex flex-row flex-wrap justify-content-center">
        {createNumberList(pagesAmount).map(pageNumber =>
            <PaginationButton key={pageNumber} pageNumber={pageNumber} currentPage={currentPage} onClickCallback={onClickCallback} />)}
    </div>);
}

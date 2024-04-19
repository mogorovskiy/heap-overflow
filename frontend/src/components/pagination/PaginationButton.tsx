interface PaginationButtonProps {
    pageNumber: number;
    currentPage: number;
    onClickCallback: any;
}

export default function PaginationButton({pageNumber, currentPage, onClickCallback}: PaginationButtonProps) {
    const everyButtonStyle = {fontSize: "0.9rem", borderRadius: "4px", padding: "2px 8px"};
    const buttonStyle = {...everyButtonStyle, color:"black"};
    const currentPageButtonStyle = {...everyButtonStyle, background: "orange", borderColor: "orange", color:"white"};

    return (<button onClick={() => onClickCallback(pageNumber)}
                    className={"m-1 btn btn-outline-secondary"}
                    style={pageNumber === currentPage
                        ? currentPageButtonStyle
                        : buttonStyle}>
        {pageNumber}
    </button>);
}

interface PaginationButtonProps {
    value?: number;
    selectedValue?: number;
    onClickCallback?: any;
    name?: string;
}

export default function PaginationButton({value, selectedValue, onClickCallback, name}: PaginationButtonProps) {
    const everyButtonStyle = {fontSize: "0.9rem", borderRadius: "4px", padding: "2px 8px"};
    const buttonStyle = {...everyButtonStyle, color:"black"};
    const selectedButtonStyle = {...everyButtonStyle, background: "orange", borderColor: "orange", color:"white"};

    return (<button onClick={() => onClickCallback(value)}
                    className={"m-1 btn btn-outline-secondary"}
                    style={value && value === selectedValue
                        ? selectedButtonStyle
                        : buttonStyle}>
        {name ? name : value}
    </button>);
}

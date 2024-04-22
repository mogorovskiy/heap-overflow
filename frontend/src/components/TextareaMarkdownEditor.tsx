import {useRef, useState} from "react";

interface TextareaMarkdownEditorProps {
    handleChange: (value: string) => void
}

export default function TextareaMarkdownEditor({handleChange}: TextareaMarkdownEditorProps) {
    const [value, _setValue] = useState("");
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const setValue = (value: string) => {
        _setValue(value);
        handleChange(value);
    }

    const addStringToInput = (stringToAdd: string) => {
        if (textareaRef.current) {
            const start = textareaRef.current.selectionStart || 0;
            const end = textareaRef.current.selectionEnd || 0;
            const value = textareaRef.current.value;

            const newValue =
                value.substring(0, start) + stringToAdd + value.substring(end, value.length);
            setValue(newValue);
            textareaRef.current.focus();
            textareaRef.current.setSelectionRange(start + stringToAdd.length, start + stringToAdd.length);
        }
    };

    return (
        <div className="border p-0 rounded">
            <div className="gap-x-3 py-2 px-3 flex flex-row">
                <button className="w-6 h-6" type="button" onClick={() => addStringToInput("**strong text**")}>
                    <span className="fw-bold">
                        B
                    </span>
                </button>
                <button className="w-6 h-6" type="button" onClick={() => addStringToInput("*emphasized text*")}>
                    <span className="italic font-serif">
                        I
                    </span>
                </button>

                <button className="w-6 h-6 ml-5" type="button" onClick={() => addStringToInput("> Blockquote")}>
                    <img className="w-50" src="https://img.icons8.com/ios-filled/50/quote-right.png" alt="quote-right"/>
                </button>
                <button className="w-6 h-6" type="button" onClick={() => addStringToInput("`code snippet`")}>
                    <img className="w-50" src="https://img.icons8.com/ios-filled/50/curly-brackets.png" alt="curly-brackets"/>
                </button>
                <button className="w-6 h-6" type="button" onClick={() => addStringToInput("```code block```")}>
                    <img className="w-75" src="https://img.icons8.com/ios/50/source-code.png" alt="source-code"/>
                </button>

                <button className="w-6 h-6 ml-5" type="button" onClick={() => addStringToInput("\n 1. List item")}>
                    <img className="w-75" src="https://img.icons8.com/ios-filled/50/numbered-list.png" alt="numbered-list"/>
                </button>
                <button className="w-6 h-6" type="button" onClick={() => addStringToInput("\n - List item")}>
                    <img className="w-75" src="https://img.icons8.com/ios-filled/50/bulleted-list.png" alt="bulleted-list"/>
                </button>
            </div>
            <textarea className="w-100 h-24 m-0 p-0 border-top d-block bg-transparent px-2 py-1" style={{outline: "none"}}
                value={value} onChange={({target}) => setValue(target.value)}
                ref={textareaRef} >
            </textarea>
        </div>
    );
}

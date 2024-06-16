import "./TextField.scss";
import React, {useState, ChangeEvent, useId} from "react";
import Input from "./Input";
import SelectBox from "./SelectBox";

interface Props {
    type: keyof StyleObj;
    value?: string;
    onChange?: (value: string) => void;
}

interface StyleObj {
    ID: string;
    text: string;
    email: string;
    password: string;
}

const TextField = ({ type, value, onChange }: Props) => {
    const id = useId();
    const [inputValue, setInputValue] = useState(value || '');

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        setInputValue(newValue);
        if (onChange) {
            onChange(newValue);
        }
    };

    return (
        <div className={`${type}Container`}>
            <Input mode={type} value={inputValue} onChange={() => handleChange} />
            {type === "email" ? (
                <>
                    <span id={`${id}AtSymbol`} className="at-symbol">@</span>
                    <SelectBox mode={type} data={['gmail.com', 'naver.com', 'daum.com']} />
                </>
            ) : null}
        </div>
    );
};

export default TextField;

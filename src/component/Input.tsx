import React, { ChangeEvent } from "react";
import './Input.scss';

interface Props {
    mode: keyof StyleObj;
    value?: string;
    onChange?: (value: string) => void;
}

interface StyleObj {
    ID: string;
    text: string;
    email: string;
    password: string;
}

const Input = ({ mode, value, onChange }: Props) => {
    const styleObj: StyleObj = {
        'ID': 'text',
        'text': 'text',
        'email': 'email',
        'password': 'password'
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
            onChange(e.target.value);
        }
    };

    return (
        <input
            id={`id${mode}`}
            type={styleObj[mode]}
            placeholder={`${mode}`}
            value={value}
            onChange={handleChange}
        />
    );
};

export default Input;
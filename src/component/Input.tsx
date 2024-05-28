import React from "react";
import './Input.scss'
interface Props {
    mode: keyof StyleObj
}

interface StyleObj {
    text: string;
    email: string;
    password: string;
}

const Input = ({ mode }: Props) => {
    const styleObj: StyleObj = {
        'text' : 'text',
        'email' : 'email',
        'password' : 'password'
    }
    return(
        <input id={`id${mode}`} type={styleObj[mode]} placeholder={`Enter ${mode}`}/>
    )
}
export default Input;

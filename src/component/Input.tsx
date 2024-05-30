import React from "react";
import './Input.scss'
interface Props {
    mode: keyof StyleObj
}

interface StyleObj {
    ID: string;
    text: string;
    email: string;
    password: string;
}

const Input = ({ mode }: Props) => {
    const styleObj: StyleObj = {
        'ID' : 'ID',
        'text' : 'text',
        'email' : 'email',
        'password' : 'password'
    }
    return(
        <input id={`id${mode}`} type={styleObj[mode]} placeholder={`${mode}`}/>
    )
}
export default Input;

import "./TextField.scss";
import React from "react";
import {useId} from "react";
import Input from "./Input";
import SelectBox from "./SelectBox";


interface Props {
    type: keyof StyleObj
}
interface StyleObj {
    ID: string;
    text: string;
    email: string;
    password: string;
}

const TextField = ({type}: Props)  => {
    const id = useId();

    return(
        <div className={`${type}Container`}>
            <Input mode={`${type}`}/>
            {type === "email"?(
                <>
                    <span id={`${id}AtSymbol`} className="at-symbol">@</span>
                    <SelectBox mode={`${type}`} data={['gmail.com', 'naver.com', 'daum.com']}/>
                </>
            ): null}
        </div>
    )
};

export default TextField;


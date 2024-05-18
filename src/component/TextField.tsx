import "./TextField.scss";
import React from "react";
import {useId} from "react";


interface Props {
    placeHolder: String
    type: String
}

const TextField = ({placeHolder, type}: Props)  => {
    const id = useId();

    return (
        <div className="input-container">
            {type === "text" ? (
                <input id={`${id}-text`} type="text" className="input-line" placeholder={`${placeHolder}`}/>
            ) : (
                <div className="input-email-container">
                    <input id={`${id}-email`} type="email" className="input-email" placeholder="Enter email"/>
                    <span id={`${id}-at-symbol`} className="at-symbol">@</span>
                    <select id={`${id}-email-domain`} className="email-domain">
                        <option value="@gmail.com">gmail.com</option>
                        <option value="@naver.com">naver.com</option>
                        <option value="@daum.net">daum.net</option>
                    </select>
                </div>
            )}

        </div>
    );
};

export default TextField;
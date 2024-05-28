import "./Button.scss";
import React from "react";

interface Props {
    buttonSize: String
    buttonColor: String
    children: String
}

const Button = ({buttonSize, buttonColor, children }: Props)  => {
    return (
        <button
            className={`${buttonSize} ${buttonColor}`}
        >
            {children}
        </button>
    );
};
export default Button;
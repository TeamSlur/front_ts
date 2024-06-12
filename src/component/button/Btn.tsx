import "./Button.scss";
import React from "react";

interface Props {
    buttonSize: String
    buttonColor: String
    children: String
    onClick?: () => void
}

const Button = ({buttonSize, buttonColor, children, onClick }: Props)  => {
    return (
        <button className={`${buttonSize} ${buttonColor}`} onClick={onClick}>
            {children}
        </button>
    );
};
export default Button;
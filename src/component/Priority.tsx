import React from "react";
import './Priority.scss'

interface Props{
    type: number
}

const Priority = ({type}: Props) => {
    return (
        <button id={`priority${type}`}>
            <span className="priorityText">{type}</span>순위
        </button>
    )
}
export default Priority;
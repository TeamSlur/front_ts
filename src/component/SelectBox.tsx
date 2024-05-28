import React from "react";
import {useId} from "react";
import './SelectBox.scss';

interface Props {
    mode: String,
    data: Array<string>
}
const SelectBox = ({mode, data}: Props) => {
    const selectId = useId();
    const optionId = useId();

    return (
        <select id={selectId+mode} className={`selectBox`}>
            {data.map((item, index) => (
                <option key={optionId + index} value={item}>
                    {item}
                </option>
            ))}
        </select>
    )
}
export default SelectBox

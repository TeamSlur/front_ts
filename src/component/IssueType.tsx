import React from "react";
import './IssueType.scss'

interface Props {
    type: keyof IssueTypeObj
}
interface IssueTypeObj{
    bug: '버그',
    improvement: '개선',
    new: '새 기능',
    issue: '이슈'
}
const issueTextObj: IssueTypeObj = {
    bug: '버그',
    improvement: '개선',
    new: '새 기능',
    issue: '이슈'
};

const IssueType = ({type}: Props) => {
    return (
        <button id={`issue${type}`}> {issueTextObj[type]} </button>
    )
}

export default IssueType;
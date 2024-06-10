import React from "react";
import CodeIcon from "./icons/CodeIcon";
import TimeLineIcon from "./icons/TimeLineIcon";
import IssueIcon from "./icons/IssueIcon";
import BoardIcon from "./icons/BoardIcon";
import'./PlanItems.scss'

interface Props {
    type: 'timeline' | 'issue' | 'code' | 'board';
    onClick?: () => void;
}

const planItemsName = {
    timeline: '타임라인',
    issue: '이슈',
    code: '코드',
    board: '칸반보드'
}


const planItems = {
    timeline: TimeLineIcon,
    issue: IssueIcon,
    code: CodeIcon,
    board: BoardIcon
};

const PlanItems = ({type, onClick}: Props) => {
    const IconComponent = planItems[type];
    return (
        <button className="planItems" onClick={onClick}>
            <IconComponent className="planIcons" />
            {planItemsName[type]}
        </button>
    );
}
export default PlanItems
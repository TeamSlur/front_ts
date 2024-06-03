import React from "react"
import './SideBar.scss'
import ProjectNav from "../component/ProjectNav";
import PlanItems from "../component/PlanItems";
import {useNavigate} from "react-router-dom";

const projectList = [
    {
        project_id: 1,
        project_name: 'test1',
        project_members: 5
    },
    {
        project_id: 2,
        project_name: 'test2',
        project_members: 3
    }
];

interface Props {
    pageContent: String
}

const SideBar =({pageContent}: Props)=>{
    const history = useNavigate();

    return (
        <div className={'sideBar'}>
            <ProjectNav projectList={projectList}/>
            <span className={'planText'}>계획</span>
            <PlanItems type={"timeline"} onClick={() => history(`/main/test`)}/>
            <PlanItems type={"board"} onClick={() => history(`/main?pageContent=${pageContent}`)}/>
            <PlanItems type={"issue"} onClick={() => history(`/main?pageContent=${pageContent}`)}/>
            <PlanItems type={"code"} onClick={() => history(`/main?pageContent=${pageContent}`)}/>
            <span className={'planText'}>문서</span>
        </div>
    )
}

export default SideBar
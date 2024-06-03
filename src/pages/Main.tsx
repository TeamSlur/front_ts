import React from 'react';
import TopBar from "../content/TopBar";
import SideBar from "../content/SideBar";
import Document from "../content/Document";
import TestPage from "./TestPage";
import {useParams} from "react-router-dom";

const Main=()=>{
    const {pageContent} = useParams<{ pageContent: string }>();
    const renderPage: { [key: string]: JSX.Element } = {
        'document': <Document />,
        'test': <TestPage />,
        'default' : <Document />
    };

    const getPageContent = (page: string | undefined): JSX.Element => {
        if (page && renderPage[page]) {
            return renderPage[page];
        }
        return renderPage['default'];
    };
    console.log(getPageContent(pageContent))
    return (
        <div className="mainContainer">
            <TopBar />
            <div className="contentContainer">
                <SideBar pageContent={'default'}/>
                <div className="pageContent">
                    {getPageContent(pageContent)}
                </div>
            </div>
        </div>
    );
}
export default Main
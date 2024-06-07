import React, {useState} from 'react';
import TopBar from "../content/TopBar";
import SideBar from "../content/SideBar";
import Document from "../content/Document";
import TestPage from "./TestPage";
import {useParams} from "react-router-dom";
import './Main.scss'

const Main=()=>{
    const {pageContent} = useParams<{ pageContent: string }>();
    const [showChat, setShowChat] = useState(false);
    const renderPage: { [key: string]: JSX.Element } = {
        'document': <Document />,
        'test': <TestPage />,
        'default' : <Document />
    };
    const toggleChat = () => {
        setShowChat(!showChat);
    };
    const getPageContent = (page: string | undefined): JSX.Element => {
        if (page && renderPage[page]) {
            return renderPage[page];
        }
        return renderPage['default'];
    };

    return (
        <div className="mainContainer">
            <TopBar toggleChat={toggleChat}/>
            <div className={`contentContainer ${showChat ? 'chatVisible' : ''}`}>
                <SideBar pageContent={'default'}/>
                <div className="pageContent">
                    {getPageContent(pageContent)}
                </div>
                {showChat && <div className="chatContainer">Chat Content</div>}
            </div>
        </div>

    );
}
export default Main
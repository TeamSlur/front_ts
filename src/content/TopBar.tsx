import React from "react";
import ChatIcon from "../component/ChatIcon";
import UserIcon from "../component/UserIcon";
import SettingIcon from "../component/SettingIcon";
import AlertIcon from "../component/AlertIcon";
import './TopBar.scss'

interface Props {
    toggleChat: () => void;
}

const TopBar: React.FC<Props> = ({ toggleChat }) => {
    return (
        <div className="topBar">
            <div className="LogoContainer">
                <img
                    id="Logo_login"
                    src={`${process.env.PUBLIC_URL}/assets/imgs/logo.png`}
                    alt="Logo"
                    className="topBarLogo"
                />
                <span className="teamName">TeamSlur</span>
            </div>
            <div className="topBarIcons">
                <ChatIcon onClick={toggleChat} />
                <AlertIcon />
                <UserIcon />
                <SettingIcon />
            </div>
        </div>
    );
};

export default TopBar;
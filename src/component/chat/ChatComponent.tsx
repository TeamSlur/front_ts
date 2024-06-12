import React from "react";
import UserIcon from "../icons/UserIcon";
import './ChatComponent.scss'

interface Props {
    title: string;
    user_list: Array<string>;
    last_msg: string;
    onClick: () => void;
}

const ChatComponent: React.FC<Props> = ({ title, user_list, last_msg, onClick }) => {
    const renderUserIcons = (count: number) => {
        return user_list.slice(0, 4).map((_, index) => <UserIcon key={index} />);
    };

    const userIconsClass = `userIcons userIcons-${Math.min(user_list.length, 4)}`;

    return (
        <div className="chatRoom" onClick={onClick}>
            <div className={userIconsClass}>
                {renderUserIcons(user_list.length)}
            </div>
            <div className="chatRoomInfo">
                <h3>{title}</h3>
                <p className="lastMessage">{last_msg}</p>
            </div>
        </div>
    );
};
export default ChatComponent
import React from 'react';
import SearchIcon from "../component/SearchIcon";
import './ChatRoom.scss'


interface Props {
    chatRoomName: string;
    onBack: () => void;
}

const ChatTopBar = ({ chatRoomName, onBack }: Props) => {
    return (
        <div className="chatTopBar">
            <button onClick={onBack}>&lt;</button>
            <span>{chatRoomName}</span>
            <div className="chatTopBarIcons">
                <button className={'searchIcon'}><SearchIcon/></button>
                <button>⋮</button>
            </div>
        </div>
    );
};

export default ChatTopBar;

import React from 'react';
import './Chat.scss';
import ChatComponent from "../component/chat/ChatComponent";
interface ChatProps {
    onChatClick: (title: string) => void;
}
const Chat = ({ onChatClick }:ChatProps) => {
    const chatRooms = [
        {
            title: 'user A',
            user_list: ['user1'],
            last_msg: 'aaabbbbcccccdddddeee...'
        },
        {
            title: 'Group-2',
            user_list: ['user1', 'user2'],
            last_msg: 'aaabbbbcccccdddddeee...'
        },
        {
            title: 'Group-3',
            user_list: ['user1', 'user2', 'user3'],
            last_msg: 'aaabbbbcccccdddddeee...'
        },
        {
            title: 'Group-MoreThan4',
            user_list: ['user1', 'user2', 'user3', 'user4', 'user5'],
            last_msg: 'aaabbbbcccccdddddeee...'
        }
    ];

    return (
        <div>
            {chatRooms.map((room, index) => (
                <ChatComponent
                    key={index}
                    title={room.title}
                    user_list={room.user_list}
                    last_msg={room.last_msg}
                    onClick={() => onChatClick(room.title)}
                />
            ))}
        </div>
    );
};

export default Chat;

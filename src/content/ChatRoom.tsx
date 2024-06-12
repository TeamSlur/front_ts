import React, { useState } from 'react';
import ChatTopBar from './ChatTopBar';
import MessageInput from '../component/chat/MessageInput';
import './ChatRoom.scss'

interface ChatRoomProps {
    title: string;
    onBack: () => void;
}

const ChatRoom= ({ title, onBack }: ChatRoomProps) => {
    const [messages, setMessages] = useState<string[]>([]);

    const handleSendMessage = (message: string) => {
        setMessages([...messages, message]);
    };

    return (
        <div className="chatRoomContainer">
            <ChatTopBar chatRoomName={title} onBack={onBack} />
            <div className="chatMessages">
                {messages.map((msg, index) => (
                    <div key={index} className="chatMessage">
                        {msg}
                    </div>
                ))}
            </div>
            <MessageInput onSendMessage={handleSendMessage} />
        </div>
    );
};

export default ChatRoom;

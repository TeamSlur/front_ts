import React, { useState, useEffect, useRef } from 'react';
import '../../content/ChatRoom.scss'

interface Props {
    onSendMessage: (message: string) => void;
}

const MessageInput: React.FC<Props> = ({ onSendMessage }) => {
    const [message, setMessage] = useState('');
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            if (message.trim()) {
                onSendMessage(message);
                setMessage('');
            }
        }
    };
    const handleSendClick = () => {
        if (message.trim()) {
            onSendMessage(message);
            setMessage('');
        }
    };

    return (
        <div className="messageInputContainer">
            <textarea
                ref={textareaRef}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="메시지 입력"
                rows={1}
            />
            <div className="sendButtonContainer">
                <button onClick={handleSendClick}>전송</button>
            </div>
        </div>
    );
};
export default MessageInput;

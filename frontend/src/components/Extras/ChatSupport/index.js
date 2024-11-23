import React, { useState } from 'react';
import './style.css';

const ChatSupport = () => {
    const [messages, setMessages] = useState([
        { sender: 'Support', message: 'Hello! How can I assist you today?' },
    ]);
    const [newMessage, setNewMessage] = useState('');

    const handleSendMessage = () => {
        if (newMessage) {
            setMessages([...messages, { sender: 'User', message: newMessage }]);
            setNewMessage('');
        }
    };

    return (
        <div className="chat-support">
            <h3>Chat Support</h3>
            <div className="chat-window">
                {messages.map((msg, index) => (
                    <div key={index} className={`message ${msg.sender.toLowerCase()}`}>
                        <strong>{msg.sender}: </strong>{msg.message}
                    </div>
                ))}
            </div>
            <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type your message"
            />
            <button className="btn-send" onClick={handleSendMessage}>
                Send
            </button>
        </div>
    );
};

export default ChatSupport;

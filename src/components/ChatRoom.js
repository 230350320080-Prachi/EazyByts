// src/components/ChatRoom.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ChatRoom() {
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');
    const [user] = useState(''); // Handle user state

    useEffect(() => {
        // Fetch messages from backend when component mounts
        axios.get('/api/messages')
            .then(response => setMessages(response.data))
            .catch(error => console.error('Error fetching messages:', error));
    }, []);

    const handleSendMessage = () => {
        if (user && message.trim() !== '') {
            axios.post('/api/messages', { text: message, sender: user })
                .then(response => {
                    setMessages([...messages, response.data]);
                    setMessage('');
                })
                .catch(error => console.error('Error sending message:', error));
        }
    };

    return (
        <div>
            <h2>Chat Room</h2>
            <div className="messages">
                {messages.map((msg, index) => (
                    <div key={index}>
                        <strong>{msg.sender}</strong>: {msg.text} <em>({new Date(msg.timestamp).toLocaleTimeString()})</em>
                    </div>
                ))}
            </div>
            <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type a message..."
            />
            <button onClick={handleSendMessage}>Send</button>
        </div>
    );
}

export default ChatRoom;

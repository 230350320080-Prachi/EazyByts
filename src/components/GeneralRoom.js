import React, { useState, useEffect } from 'react';  // Import React
import { sendMessage, getMessages } from '../services/chatService';  // Import services

const GeneralRoom = () => {
    const [messages, setMessages] = useState([]);
    const [inputMessage, setInputMessage] = useState('');
    // Remove the navigate variable if not used
    // const navigate = useNavigate();

    useEffect(() => {
        fetchMessages();
    }, []);

    const fetchMessages = async () => {
        try {
            const response = await getMessages();
            setMessages(response.data);
        } catch (error) {
            console.error('Error fetching messages:', error);
        }
    };

    const handleSendMessage = async () => {
        if (inputMessage.trim()) {
            try {
                await sendMessage({ content: inputMessage });
                setInputMessage('');
                fetchMessages();
            } catch (error) {
                console.error('Error sending message:', error);
            }
        }
    };

    return (
        <div>
            <h2>General Room</h2>
            <div>
                {messages.map((message, index) => (
                    <div key={index}>{message.content}</div>
                ))}
            </div>
            <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
            />
            <button onClick={handleSendMessage}>Send</button>
        </div>
    );
};

export default GeneralRoom;

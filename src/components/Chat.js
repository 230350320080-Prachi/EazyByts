import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Chat() {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get('http://localhost:8081/api/messages');
        setMessages(response.data);
      } catch (error) {
        console.error('Error fetching messages', error);
      }
    };

    fetchMessages();
  }, []);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8081/api/messages', { message });
      setMessage('');
      const response = await axios.get('http://localhost:8081/api/messages');
      setMessages(response.data);
    } catch (error) {
      console.error('Error sending message', error);
    }
  };

  return (
    <div>
      <h2>Chat</h2>
      <div>
        {messages.map((msg, index) => (
          <div key={index}>
            <strong>{msg.user.username}: </strong>
            {msg.message}
          </div>
        ))}
      </div>
      <form onSubmit={handleSendMessage}>
        <input
          type="text"
          placeholder="Type a message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Chat;

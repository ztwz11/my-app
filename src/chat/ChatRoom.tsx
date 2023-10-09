import React, { useState } from 'react';

interface ChatRoomProps {
  chatRoom: {
    id: string;
    name: string;
    messages: { user: string; content: string; time: string }[];
  };
}


const ChatRoom: React.FC<ChatRoomProps> = ({ chatRoom }) => {

  const [message, setMessage] = useState<string>('');
  const [messages, setMessages] = useState<{ user: string; content: string }[]>([]);


  const handleSendMessage = () => {
    console.log('Message sent:', message);

     setMessages([...messages, { user: 'User', content: message }]);

    setMessage('');
  };

  return (
    <div className="chat-room">
      <h2>Selected Chat Room: {chatRoom.name}</h2>
      <div className="chat-messages">
        {chatRoom.messages.map((message, index) => (
          <div key={index}>
            <span>{message.user}: </span>
            <span>{message.content}</span>
            <span className="timestamp">{message.time}</span>
          </div>
        ))}
      </div>
      <textarea        
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={handleSendMessage}>Send</button>
      <button>Leave Chat Room</button>
      <button>Show Members</button>
    </div>
  );
};

export default ChatRoom;

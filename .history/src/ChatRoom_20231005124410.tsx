// ChatRoom.tsx

import React from 'react';

interface ChatRoomProps {
  chatRoom: {
    id: string;
    name: string;
    messages: { user: string; content: string; time: string }[];
  };
}

const ChatRoom: React.FC<ChatRoomProps> = ({ chatRoom }) => {
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
      <textarea placeholder="Type your message..." />
      <button>Send</button>
      <button>Leave Chat Room</button>
      <button>Show Members</button>
    </div>
  );
};

export default ChatRoom;

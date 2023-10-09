// ChatRoom.tsx

import React, { useState } from 'react';

interface ChatRoomProps {
  chatRoom: {
    id: string;
    name: string;
    messages: { user: string; content: string; time: string }[];
  };
}

const ChatRoom: React.FC<ChatRoomProps> = ({ chatRoom }) => {
  const [message, setMessage] = useState<string>(''); // State to hold the message

  const handleSendMessage = () => {
    // TODO: Implement sending the message
    // For now, let's just log the message to console
    console.log('Message sent:', message);

    // Clear the message input
    setMessage('');
  };

  return (
    <div className="chat-room">
      {/* ... (previous code) */}
      <textarea
        placeholder="Type your message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={handleSendMessage}>Send</button>
      {/* ... (previous code) */}
    </div>
  );
};

export default ChatRoom;

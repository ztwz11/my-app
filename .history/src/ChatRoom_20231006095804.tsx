import React from 'react';

interface ChatRoomProps {
  chatRoom: {
    id: string;
    name: string;
    messages: { user: string; content: string; time: string }[];
  };
}


const ChatRoom: React.FC<ChatRoomProps> = ({ chatRoom }) => {
  if (!chatRoom) {
    return null; // Return null when chatRoom is undefined
  }

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
        placeholder="Type your message..."
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

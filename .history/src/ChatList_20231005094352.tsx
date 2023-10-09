import React from 'react';
// ChatList.tsx


interface ChatListProps {
    chatRooms: { id: string; name: string }[];
    onSelectChatRoom: (chatRoomId: string) => void;
    onCreateChatRoom: () => void;  // Add onCreateChatRoom prop
  }
  
  const ChatList: React.FC<ChatListProps> = ({ chatRooms, onSelectChatRoom, onCreateChatRoom }) => {
    return (
      <div className="chat-room-list">
        <h2>Chat Rooms</h2>
        <ul>
          {chatRooms.map((chatRoom) => (
            <li key={chatRoom.id} onClick={() => onSelectChatRoom(chatRoom.id)}>
              {chatRoom.name}
            </li>
          ))}
        </ul>
        <button onClick={onCreateChatRoom}>Create Chat Room</button>  {/* Call onCreateChatRoom on button click */}
      </div>
    );
  };
  
  export default ChatList;
  
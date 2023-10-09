import React from 'react';

interface ChatListProps {
  chatRooms: { id: string; name: string }[];
  onSelectChatRoom: (chatRoomId: string) => void;
}

const ChatList: React.FC<ChatListProps> = ({ chatRooms, onSelectChatRoom }) => {
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
    </div>
  );
};

export default ChatList;
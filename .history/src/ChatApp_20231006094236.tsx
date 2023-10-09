// ChatApp.tsx

import React from 'react';
import ChatList from './ChatList';
import ChatRoom from './ChatRoom';
import MemberList from './MemberList';
import useChatStore from './ChatStore';
import './ChatApp.css'; // Import CSS for styling

const ChatApp: React.FC = () => {
  const { chatRooms, selectedChatRoomId, selectChatRoom, createChatRoom } = useChatStore();

  const handleSelectChatRoom = (chatRoomId: string) => {
    selectChatRoom(chatRoomId);
  };

  const handleCreateChatRoom = () => {
    const roomName = prompt('Enter chat room name:');
    if (roomName) {
      createChatRoom(roomName);
    }
  };

  const selectedChatRoom = chatRooms.find((room) => room.id === selectedChatRoomId);

  return (
    <div className="chat-app">
      <div className="container">
        <ChatList chatRooms={chatRooms} onSelectChatRoom={handleSelectChatRoom} onCreateChatRoom={handleCreateChatRoom} />
        <div className="chat-content">
          {selectedChatRoom ? (
            <ChatRoom chatRoom={selectedChatRoom} />
          ) : (
            <p>Select a chat room to start chatting.</p>
          )}
          <MemberList members={selectedChatRoom ? selectedChatRoom.members : []} />
        </div>
      </div>
    </div>
  );
};

export default ChatApp;

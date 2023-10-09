// ChatApp.tsx

import React from 'react';
import ChatList from './ChatList';
import ChatRoom from './ChatRoom';
import MemberList from './MemberList';
import useChatStore from './ChatStore';

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
      <ChatList chatRooms={chatRooms} onSelectChatRoom={handleSelectChatRoom} onCreateChatRoom={handleCreateChatRoom} />
      {selectedChatRoom ? (
        <ChatRoom chatRoom={selectedChatRoom} />
      ) : (
        <p>Select a chat room to start chatting.</p>
      )}
      {/* Implement MemberList component */}
      <MemberList members={selectedChatRoom ? selectedChatRoom.members : []} />
    </div>
  );
};

export default ChatApp;

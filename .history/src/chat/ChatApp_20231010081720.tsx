import React from 'react';
import ChatList from './ChatList';
import ChatRoom from './ChatRoom';
import MemberList from './MemberList';
import useChatStore from './ChatStore';
import './ChatApp.css'; 

const ChatApp: React.FC = () => {
  // Zustand hook
  const { chatRooms, selectedChatRoomId, selectChatRoom, createChatRoom } = useChatStore();

  // 채팅방선택
  const handleSelectChatRoom = (chatRoomId: string) => {
    selectChatRoom(chatRoomId);
  };

  // 채팅방생성
  const handleCreateChatRoom = () => {
    const roomName = prompt('Enter chat room name:');
    if (roomName) {
      createChatRoom(roomName);
    }
  }; 
  const selectedChatRoom = chatRooms.find((room) => room.id === selectedChatRoomId);

  return (
    <div className="chat-app">
      {/* 채팅방 목록 컴포넌트 */}
      <ChatList chatRooms={chatRooms} onSelectChatRoom={handleSelectChatRoom} onCreateChatRoom={handleCreateChatRoom} />
      <div className="chat-content">
        {/* 선택된 채팅방의 메시지 목록 및 입력 컴포넌트 */}
        {selectedChatRoom ? (
          <ChatRoom chatRoom={selectedChatRoom} />
        ) : (
          <p>Select a chat room to start chatting.</p>
        )}
        {/* 현재 채팅방의 멤버 목록 컴포넌트 */}
        <MemberList members={selectedChatRoom ? selectedChatRoom.members : []} />
      </div>
    </div>
  );
};

export default ChatApp;

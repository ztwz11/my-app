// ChatStore.ts

import create from 'zustand';

interface ChatMessage {
  user: string;
  content: string;
  time: string;
}

interface ChatRoom {
  id: string;
  name: string;
  messages: ChatMessage[];
  members: string[]; // Add members attribute
}

interface ChatStore {
  chatRooms: ChatRoom[];
  selectedChatRoomId: string | null;
  selectChatRoom: (chatRoomId: string) => void;
  createChatRoom: (name: string) => void;
}

const useChatStore = create<ChatStore>((set) => ({
  chatRooms: [
    {
      id: '1',
      name: 'Chat Room',
      messages: [
        { user: '김김', content: 'Hello!', time: '12:00 PM' },
        { user: '이이', content: 'Hi!', time: '12:05 PM' },
      ],
      members: ['Alice', 'Bob'], // Initialize members
    },
    {
      id: '2',
      name: 'Chat Room',
      messages: [
        { user: 'ㄹㄹㄹㄹ', content: 'Hello!', time: '12:00 PM' },
        { user: 'ㅎㅎㅎㅎㅎ', content: 'Hi!', time: '12:05 PM' },
      ],
      members: ['ㄹㄹㄹㄹ', 'ㅎㅎㅎㅎㅎ'], // Initialize members
    },
    {
      id: '3',
      name: 'Chat Room',
      messages: [
     
      ],
      members: ['ㅇㅇㄹㅇㄹ', 'ㅀ호ㅗㅗㅗ'], // Initialize members
    },
    {
      id: '4',
      name: 'Chat Room',
      messages: [
        { user: '김김', content: 'Hello!', time: '12:00 PM' },
        { user: '이이', content: 'Hi!', time: '12:05 PM' },
      ],
      members: ['324324', 'ㅓ7ㅓ7ㅓ'], // Initialize members
    },
  
  ],
  selectedChatRoomId: null,
  selectChatRoom: (chatRoomId) => set({ selectedChatRoomId: chatRoomId }),
  createChatRoom: (name) =>
    set((state) => ({
      chatRooms: [
        ...state.chatRooms,
        { id: String(state.chatRooms.length + 1), name, messages: [], members: [] },
      ],
    })),
}));

export default useChatStore;

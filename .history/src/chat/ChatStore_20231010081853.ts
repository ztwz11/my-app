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
      name: 'Chat Room 1',
      messages: [
        { user: '김김', content: 'Hello!', time: '12:00 PM' },
        { user: '이이', content: 'Hi!', time: '12:05 PM' },
      ],
      members: ['Alice', 'Bob'], // Initialize members
    },
    // ...dummy chat rooms
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

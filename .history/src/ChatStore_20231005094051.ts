// ChatStore.ts

import create from 'zustand';

interface ChatStore {
  chatRooms: { id: string; name: string; messages: { user: string; content: string; time: string }[] }[];
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
        { user: 'Alice', content: 'Hello!', time: '12:00 PM' },
        { user: 'Bob', content: 'Hi there!', time: '12:05 PM' },
      ],
    },
    // ...dummy chat rooms
  ],
  selectedChatRoomId: null,
  selectChatRoom: (chatRoomId) => set({ selectedChatRoomId: chatRoomId }),
  createChatRoom: (name) =>
    set((state) => ({
      chatRooms: [
        ...state.chatRooms,
        { id: String(state.chatRooms.length + 1), name, messages: [] },
      ],
    })),
}));

export default useChatStore;

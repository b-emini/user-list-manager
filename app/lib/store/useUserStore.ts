import { create } from 'zustand';

interface UserStore {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
    formData: { name: string; email: string; phone: string };
    setFormData: (data: { name: string; email: string; phone: string }) => void;
    selectedUserId: number | null;
    setSelectedUserId: (id: number | null) => void;
  }
  
  export const useUserStore = create<UserStore>((set) => ({
    searchQuery: '',
    setSearchQuery: (query: string) => set({ searchQuery: query }),
    formData: { name: '', email: '', phone: '' },
    setFormData: (data) => set(() => ({ formData: data })),
    selectedUserId: null,
    setSelectedUserId: (id) => set(() => ({ selectedUserId: id })),
  }));
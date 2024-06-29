import { create } from 'zustand';

type SidebarStore = {
    isSidebarOpen: boolean;
    setIsSidebarOpen: (isSidebarOpen: boolean) => void;
};

const useSidebarStore = create<SidebarStore>((set) => ({
    isSidebarOpen: false,
    setIsSidebarOpen: (isSidebarOpen) => set({ isSidebarOpen }),
}));

export default useSidebarStore;
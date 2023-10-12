import { create } from 'zustand';
interface SidebarDrawerStore {
	isOpen: boolean;
	onOpen: () => void;
	onClose: () => void;
}

const useSidebarDrawer = create<SidebarDrawerStore>((set) => ({
	isOpen: false,
	onOpen: () => set({ isOpen: true }),
	onClose: () => set({ isOpen: false })
}));

export default useSidebarDrawer;

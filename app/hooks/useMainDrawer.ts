import { create } from 'zustand';
interface MainDrawerStore {
	isOpen: boolean;
	onOpen: () => void;
	onClose: () => void;
}

const useMainDrawer = create<MainDrawerStore>((set) => ({
	isOpen: false,
	onOpen: () => set({ isOpen: true }),
	onClose: () => set({ isOpen: false })
}));

export default useMainDrawer;

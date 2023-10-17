import { create } from 'zustand';
interface ModuleOptionStore {
	isOpen: boolean;
	onOpen: () => void;
	onClose: () => void;
}

const useModuleOptionDrawer = create<ModuleOptionStore>((set) => ({
	isOpen: false,
	onOpen: () => set({ isOpen: true }),
	onClose: () => set({ isOpen: false })
}));

export default useModuleOptionDrawer;

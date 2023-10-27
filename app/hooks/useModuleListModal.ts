import { create } from 'zustand';
interface ModuleListModalStore {
	isOpen: boolean;
	onOpen: () => void;
	onClose: () => void;
}

const useModuleListModal = create<ModuleListModalStore>((set) => ({
	isOpen: false,
	onOpen: () => set({ isOpen: true }),
	onClose: () => set({ isOpen: false })
}));

export default useModuleListModal;

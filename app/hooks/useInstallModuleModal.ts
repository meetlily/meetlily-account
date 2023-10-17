import { create } from 'zustand';

interface InstallModuleModalStore {
	isOpen: boolean;
	onOpen: () => void;
	onClose: () => void;
}

const useInstallModuleModal = create<InstallModuleModalStore>((set) => ({
	isOpen: false,
	onOpen: () => set({ isOpen: true }),
	onClose: () => set({ isOpen: false })
}));

export default useInstallModuleModal;

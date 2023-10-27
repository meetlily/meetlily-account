import { create } from 'zustand';
interface NodeEditorModalStore {
	isOpen: boolean;
	onOpen: () => void;
	onClose: () => void;
}

const useNodeEditorModal = create<NodeEditorModalStore>((set) => ({
	isOpen: false,
	onOpen: () => set({ isOpen: true }),
	onClose: () => set({ isOpen: false })
}));

export default useNodeEditorModal;

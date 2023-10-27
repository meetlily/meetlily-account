import { create } from 'zustand';
interface CodeEditorStore {
	isOpen: boolean;
	onOpen: () => void;
	onClose: () => void;
}

const useCodeEditor = create<CodeEditorStore>((set) => ({
	isOpen: false,
	onOpen: () => set({ isOpen: true }),
	onClose: () => set({ isOpen: false })
}));

export default useCodeEditor;

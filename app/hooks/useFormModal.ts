import { create } from 'zustand';
interface useFormModalStore {
	isOpen: boolean;
	data?: any;
	onSetData?: () => void;
	onOpen: () => void;
	onClose: () => void;
}

const useFormModal = create<useFormModalStore>((set) => ({
	isOpen: false,
	data: { id: '', name: '', data: null },
	onOpen: () => set({ isOpen: true }),
	onClose: () => set({ isOpen: false })
}));

export default useFormModal;

import { create } from 'zustand';
interface DeleteModalStore {
	isOpen: boolean;
	data?: any;
	onOpen: () => void;
	onClose: () => void;
}

const useDeleteModal = create<DeleteModalStore>((set) => ({
	isOpen: false,
	onOpen: () => set({ isOpen: true }),
	onClose: () => set({ isOpen: false })
}));

export default useDeleteModal;

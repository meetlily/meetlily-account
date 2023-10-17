import { create } from 'zustand';

interface useLoaderStore {
	isLoading: boolean;
	onOpen: () => void;
	onClose: () => void;
}
const useLoader = create<useLoaderStore>((set) => ({
	isLoading: true,
	onOpen: () => set({ isLoading: true }),
	onClose: () => set({ isLoading: false })
}));

export default useLoader;

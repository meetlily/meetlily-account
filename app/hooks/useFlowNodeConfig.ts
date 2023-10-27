import { create } from 'zustand';
interface useFlowNodeConfigStore {
	data: object;
	isOpen: boolean;
	onOpen: () => void;
	onClose: () => void;
}

const useFlowNodeConfig = create<useFlowNodeConfigStore>((set) => ({
	data: {},
	isOpen: false,
	onOpen: () => set({ isOpen: true }),
	onClose: () => set({ isOpen: false })
}));

export default useFlowNodeConfig;

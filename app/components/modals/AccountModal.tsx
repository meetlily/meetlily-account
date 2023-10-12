'use client';

import useAccountModal from '@/app/hooks/useAccountModal';
import { SafeUser } from '@/app/types';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import ModalContainer from './ModalContainer';

interface AccountModalProps {
	currentUser?: SafeUser | null;
}
const AccountModal: React.FC<AccountModalProps> = ({ currentUser }) => {
	const accountModal = useAccountModal();
	const router = useRouter();
	const [isLoading, setIsLoading] = useState(false);
	return (
		<ModalContainer
			disabled={false}
			isOpen={accountModal.isOpen}
			title="Account"
			headerTitle="Manage Account"
			subtitle="Manage and update your account profile."
			actionLabel="Next"
			onClose={accountModal.onClose}
			backgroundImage="/images/image.jpg"
			onSubmit={accountModal.onClose}
			overlay
		/>
	);
};

export default AccountModal;

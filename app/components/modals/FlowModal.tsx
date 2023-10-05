'use client';

import { Button, Modal } from 'flowbite-react';
import { useEffect, useState } from 'react';
import IconComponent from '../icons/IconComponent';
interface FlowModalProps {
	label?: string;
	onClose?: () => void;
	disabled?: boolean;
	buttonIcon?: React.ReactElement;
	buttonColor?: string;
	modalBody?: React.ReactElement;
	modalHeader?: React.ReactElement;
	modalHeaderTitle?: string;
	modalHeaderIcon?: React.ReactElement;
	modalFooter?: boolean;
	onSubmit: () => void;
	modalFooterPrimaryLabel?: string;
	modalFooterSecondaryAction: () => void;
	modalFooterSecondaryLabel?: string;
	isOpen?: boolean;
	modalId?: string;
	modalStyle?: string;
	size?: string;
	placement?: string;
}
const FlowModal: React.FC<FlowModalProps> = ({
	label,
	onClose,
	disabled,
	buttonIcon,
	buttonColor,
	modalBody: Body,
	modalHeader: Header,
	modalHeaderTitle,
	modalHeaderIcon,
	modalFooter,
	onSubmit,
	modalFooterPrimaryLabel,
	modalFooterSecondaryAction,
	modalFooterSecondaryLabel,
	modalId,
	isOpen,
	size,
	placement
}) => {
	const [isLoading, setIsLoading] = useState(false);
	const [openModal, setOpenModal] = useState<string | undefined>('default');
	const [modalPlacement, setModalPlacement] = useState<string>('center');
	const [modalSize, setModalSize] = useState<string>('md');
	const props = {
		modalPlacement,
		openModal,
		setModalPlacement,
		setOpenModal,
		modalSize,
		setModalSize
	};

	const [showModal, setShowModal] = useState(isOpen);
	useEffect(() => {
		setShowModal(isOpen);
	}, [isOpen]);

	if (!modalHeaderTitle) {
		modalHeaderTitle = 'Sample Header Title';
	}
	return (
		<>
			<Button color={buttonColor} onClick={() => setShowModal(true)}>
				{label}
			</Button>
			<Modal size={size} show={showModal}>
				<Modal.Header>{Header}</Modal.Header>
				<Modal.Body>{Body}</Modal.Body>
				<Modal.Footer>
					<div className="flex flex-row">
						<Button
							color={'dark'}
							size={size}
							isProcessing={isLoading}
							disabled={isLoading}
							className={'w-full px-4 pl-2'}
						>
							<IconComponent iconName="signIn" size={24} />
							<p className="hidden md:block" aria-hidden>
								{modalFooterPrimaryLabel}
							</p>
						</Button>
						<Button
							color={'gray'}
							size={size}
							isProcessing={isLoading}
							onClick={modalFooterSecondaryAction}
							disabled={isLoading}
							className={'w-full px-4 pl-2 text-gray-600'}
						>
							<IconComponent iconName="close" size={24} />
							<p className="hidden md:block" aria-hidden>
								{modalFooterSecondaryLabel}
							</p>
						</Button>
					</div>
				</Modal.Footer>
			</Modal>
		</>
	);
};

export default FlowModal;

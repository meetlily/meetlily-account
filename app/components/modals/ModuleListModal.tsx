'use client';
import useModuleListModal from '@/app/hooks/useModuleListModal';
import { Modal } from 'flowbite-react';
import { useParams, useRouter } from 'next/navigation';
import React, { useCallback, useEffect, useState } from 'react';

interface FormData {
	[fieldName: string]: string | number;
}
interface SelectData {
	[fieldName: string]: string | number;
}
interface ModuleListModalProps {
	data?: any;
	header?: React.ReactElement;
	footer?: React.ReactElement;
	isOpen?: boolean;
	disabled?: boolean;
	size?: string;
	id?: string;
	label?: string;
	submitAction?: (item: any) => void;
	cancelAction?: () => void;
	children: React.ReactNode;
	position?: string | 'top-center';
	className?: string;
}

const ModuleListModal: React.FC<ModuleListModalProps> = ({
	data,
	header,
	footer,
	isOpen,
	disabled,
	size,
	id,
	label,
	submitAction,
	cancelAction,
	children,
	position,
	className
}) => {
	const [selectData, setSelectData] = useState();
	const [isLoading, setIsLoading] = useState(false);
	const router = useRouter();
	const params = useParams();
	const moduleListModal = useModuleListModal();
	const slug = params?.slug;
	const [showModal, setShowModal] = useState(isOpen);
	const [hasData, setHasData] = useState<any>({});
	useEffect(() => {
		setHasData(data);
	}, [setHasData, data]);
	const handleClose = useCallback(() => {
		if (disabled) {
			return;
		}
		moduleListModal.onClose();
	}, [disabled, moduleListModal]);

	return (
		<Modal
			id={id}
			size={size}
			show={moduleListModal.isOpen}
			onClose={moduleListModal.onClose}
			className={`
				${header ? 'rounded-lg' : 'rounded-0'} 
			
				`}
			position={position}
		>
			<Modal.Header>{header}</Modal.Header>
			<Modal.Body
				className={`
				${className ? className : ''} 
				px-4
				border-gray-500
				text-gray-50
				dark:bg-gray-800
				dark:text-gray-200
				`}
			>
				{children}
			</Modal.Body>
			<Modal.Footer>{footer}</Modal.Footer>
		</Modal>
	);
};

export default ModuleListModal;

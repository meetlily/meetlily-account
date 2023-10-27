'use client';
import useNodeEditorModal from '@/app/hooks/useNodeEditorModal';
import { Modal } from 'flowbite-react';
import { useParams, useRouter } from 'next/navigation';
import React, { useCallback, useEffect, useState } from 'react';

interface FormData {
	[fieldName: string]: string | number;
}
interface SelectData {
	[fieldName: string]: string | number;
}
interface NodeEditorModalProps {
	data?: any;
	header?: React.ReactElement;
	footer?: React.ReactElement;
	isOpen?: boolean;
	disabled?: boolean;
	size?: string;
	id?: string;
	label?: string;
	submitAction: (item: any) => void;
	cancelAction?: () => void;
	children: React.ReactNode;
	position?: string | 'top-center';
	className?: string;
}

const NodeEditorModal: React.FC<NodeEditorModalProps> = ({
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
	const nodeEditor = useNodeEditorModal();
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
		nodeEditor.onClose();
	}, [disabled, nodeEditor]);

	return (
		<Modal
			id={id}
			size={size}
			show={nodeEditor.isOpen}
			onClose={nodeEditor.onClose}
			className={`
				${header ? 'rounded-lg' : 'rounded-0'} 
			
				`}
			position={position}
		>
			{header && <Modal.Header>{header}</Modal.Header>}
			<Modal.Body
				className={`
				${className ? className : ''} 
				
				${header ? 'rounded-0' : 'rounded-lg border-1 border-gray-300 dark:border-gray-700'} 
				px-4

				
				border-2
				border-gray-500
				text-gray-50
				dark:bg-gray-800
				dark:text-gray-200
				`}
			>
				{children}
			</Modal.Body>
			{footer && <Modal.Footer>{footer}</Modal.Footer>}
		</Modal>
	);
};

export default NodeEditorModal;

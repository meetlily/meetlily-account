'use client';
import ButtonComponent from '@/app/components/Button';
import AppIcons from '@/app/components/icons/AppIcons';
import useDeleteModal from '@/app/hooks/useDeleteModal';
import { Modal } from 'flowbite-react';
import { useParams, useRouter } from 'next/navigation';
import React, { useCallback, useEffect, useState } from 'react';
import IconComponent from '../icons/IconComponent';

interface FormData {
	[fieldName: string]: string | number;
}
interface SelectData {
	[fieldName: string]: string | number;
}
interface DeleteModalProps {
	data: any;
	isOpen?: boolean;
	disabled?: boolean;
	size?: string;
	id?: string;
	label?: string;
	deleteAction: (item: any) => void;
	cancelAction?: () => void;
}

const DeleteModal: React.FC<DeleteModalProps> = ({
	data,
	isOpen,
	disabled,
	size,
	id,
	label,
	deleteAction,
	cancelAction
}) => {
	const [selectData, setSelectData] = useState();
	const [isLoading, setIsLoading] = useState(false);
	const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string>('');
	const router = useRouter();
	const params = useParams();
	const deleteModal = useDeleteModal();
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
		deleteModal.onClose();
	}, [disabled, deleteModal]);

	const deleteData = useCallback(
		(item: any) => {
			//console.log(item);
			deleteAction(item);
		},
		[deleteAction]
	);
	return (
		<Modal
			id={id}
			size={size}
			show={deleteModal.isOpen}
			onClose={deleteModal.onClose}
			className="rounded-lg"
			position={'top-center'}
		>
			<Modal.Body className="rounded-lg p-4">
				<div className="p-6 my-2 text-center flex flex-row items-center justify-center">
					<div className="w-20 text-red-500">
						<IconComponent iconName="trash" size={60} />
					</div>
					<h3 className="text-lg font-normal text-red-500 dark:text-red-400">
						Are you sure you want to delete {data?.name}?
					</h3>
				</div>
				<div className="flex flex-row gap-6 px-10 py-6">
					<ButtonComponent
						isProcessing={isLoading}
						label={'Yes, I am sure'}
						onClick={() => deleteData(hasData)}
						classNames="text-white py-4 w-full bg-red-500 hover:bg-red-600  border border-orange-700 hover:border-orange-800 px-4 pl-2"
						color="orange"
						size="lg"
						icon={AppIcons['trash']}
						iconSize={24}
					/>
					<ButtonComponent
						label={'No, cancel'}
						onClick={() => handleClose()}
						classNames="w-full py-4  px-4 pl-2 text-gray-600 dark:bg-gray-600"
						color="gray"
						size="lg"
						icon={AppIcons['close']}
						iconSize={24}
					/>
				</div>
			</Modal.Body>
		</Modal>
	);
};

export default DeleteModal;

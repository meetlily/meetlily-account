import ButtonComponent from '@/app/components/Button';
import AppIcons from '@/app/components/icons/AppIcons';
import { FormFieldGroup } from '@/app/types/form';
import { Modal } from 'flowbite-react';
import { useParams, useRouter } from 'next/navigation';
import React, { useCallback, useEffect, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

interface FormData {
	[fieldName: string]: string | number;
}
interface SelectData {
	[fieldName: string]: string | number;
}
interface DeleteModalProps {
	data: FormFieldGroup[] | null;
	isOpen?: boolean;
	disabled?: boolean;
	size?: string;
	id?: string;
	label?: string;
}

const DeleteModal: React.FC<DeleteModalProps> = ({
	data,
	isOpen,
	disabled,
	size,

	id,
	label
}) => {
	const [selectData, setSelectData] = useState<SelectData>({});
	const [isLoading, setIsLoading] = useState(false);
	const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string>('');
	const router = useRouter();
	const params = useParams();
	const slug = params?.slug;

	const [showModal, setShowModal] = useState(isOpen);
	useEffect(() => {
		setShowModal(isOpen);
	}, [isOpen]);
	const handleClose = useCallback(() => {
		if (disabled) {
			return;
		}
		setShowModal(false);
	}, [disabled]);
	const {
		register,
		reset,
		handleSubmit,
		formState: { errors }
	} = useForm<FieldValues>({
		defaultValues: {}
	});
	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		console.log(data);
	};

	return (
		<Modal id={id} size={size} show={showModal} onClose={handleClose}>
			<Modal.Header>Delete</Modal.Header>
			<Modal.Body>
				<div className="p-6 text-center">
					<svg
						aria-hidden="true"
						className="mx-auto mb-4 text-gray-400 w-14 h-14 dark:text-gray-200"
						fill="none"
						stroke="currentColor"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
						/>
					</svg>
					<h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
						Are you sure you want to delete {label}?
					</h3>
				</div>
			</Modal.Body>
			<Modal.Footer>
				<div className="flex flex-row gap-2">
					<ButtonComponent
						isProcessing={isLoading}
						label={'Yes, I am sure'}
						onClick={handleSubmit(onSubmit)}
						classNames="w-full px-4 pl-2"
						color="dark"
						size="sm"
						icon={AppIcons['add']}
						iconSize={24}
					/>
					<ButtonComponent
						label={'No, cancel'}
						onClick={() => setShowModal(false)}
						classNames="w-full px-4 pl-2 text-gray-600"
						color="gray"
						size="sm"
						icon={AppIcons['close']}
						iconSize={24}
					/>
				</div>
			</Modal.Footer>
		</Modal>
	);
};

export default DeleteModal;

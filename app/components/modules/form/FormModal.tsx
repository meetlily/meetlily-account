'use client';
import useFormModal from '@/app/hooks/useFormModal';
import { Formfield } from '@prisma/client';
import { Modal } from 'flowbite-react';
import { useParams, useRouter } from 'next/navigation';
import React, { useState } from 'react';
interface FormData {
	[fieldName: string]: string | number;
}
interface SelectData {
	[fieldName: string]: string | number;
}
interface FormModalProps {
	header?: React.ReactNode;
	body?: React.ReactNode;
	fields?: Formfield;
	isOpen?: boolean;
	disabled?: boolean;
	size?: string;
	values: FormData;
	id?: string;
	footer?: React.ReactNode;
}

const FormModal: React.FC<FormModalProps> = ({
	header,
	body,
	fields,
	isOpen,
	disabled,
	size,
	values,
	id,
	footer
}) => {
	const [formData, setFormData] = useState<FormData>({});
	const formModal = useFormModal();
	const [isLoading, setIsLoading] = useState(false);
	const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string>('');
	const [showFormModal, setShowFormModal] = useState(isOpen);
	const router = useRouter();
	const params = useParams();
	const slug = params?.slug;

	return (
		<>
			<Modal id={id} size={size} show={formModal.isOpen} onClose={formModal.onClose}>
				<Modal.Header>{header}</Modal.Header>
				<Modal.Body>{body}</Modal.Body>
			</Modal>
		</>
	);
};

export default FormModal;

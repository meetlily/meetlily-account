'use client';
import useLoginModal from '@/app/hooks/useLoginModal';
import useRegisterModal from '@/app/hooks/useRegisterModal';
import { SafeUser } from '@/app/types';
import axios from 'axios';
import { signIn } from 'next-auth/react';
import { useCallback, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { AiFillGithub } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import Button from '../Button';
import Input from '../inputs/Input';
import Modal from './Modal';

interface RegisterModalProps {
	currentUser?: SafeUser | null;
}

const RegisterModal: React.FC<RegisterModalProps> = ({ currentUser }) => {
	const registerModal = useRegisterModal();
	const loginModal = useLoginModal();
	const [isLoading, setIsLoading] = useState(false);
	const {
		register,
		reset,
		handleSubmit,
		formState: { errors }
	} = useForm<FieldValues>({
		defaultValues: {
			name: '',
			email: '',
			password: ''
		}
	});
	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		setIsLoading(true);
		axios
			.post('/api/register', data)
			.then(() => {
				registerModal.onClose();
			})
			.catch((error) => {
				toast.error('Something went wrong.');
			})
			.finally(() => {
				reset();
				setIsLoading(false);
			});
	};
	const toggle = useCallback(() => {
		registerModal.onClose();
		loginModal.onOpen();
	}, [loginModal, registerModal]);
	const bodyContent = (
		<div
			className="
                flex
                flex-col
                gap-4
            "
		>
			<Input
				id="name"
				type="text"
				label="Name"
				disabled={isLoading}
				register={register}
				errors={errors}
				required
			/>
			<Input
				id="email"
				type="email"
				label="Email"
				disabled={isLoading}
				register={register}
				errors={errors}
				required
			/>
			<Input
				id="password"
				type="password"
				label="Password"
				disabled={isLoading}
				register={register}
				errors={errors}
				required
			/>
		</div>
	);
	const footerContent = (
		<>
			<div className="mt-6 border-b border-b-gray-300"></div>
			<p className="py-2 text-sm font-thin text-center text-gray-400">or register with</p>
			<div className="flex flex-row gap-4 mt-3">
				<Button outline label="Google" icon={FcGoogle} onClick={() => signIn('google')} />
				<Button outline label="Github" icon={AiFillGithub} onClick={() => signIn('github')} />
			</div>
			<div
				className="
                text-neutral-500
                text-center
                mt-4
                font-light
            "
			>
				<div className="justify-center flex flex-row items-center gap-2 text-sm">
					<div>Already have an account?</div>
					<div
						onClick={toggle}
						className="
                        text-neutral-800
                        cursor-pointer
                        hover:underline
                    "
					>
						Login.
					</div>
				</div>
			</div>
		</>
	);
	return (
		<Modal
			disabled={isLoading}
			isOpen={registerModal.isOpen}
			title="Register"
			headerTitle="Register"
			subtitle="To create an account, please use the form below."
			actionLabel="Create"
			onClose={registerModal.onClose}
			onSubmit={handleSubmit(onSubmit)}
			body={bodyContent}
			backgroundImage="/images/image.jpg"
			footer={footerContent}
			showLogo
			hideClose={!currentUser ? true : false}
		/>
	);
};

export default RegisterModal;

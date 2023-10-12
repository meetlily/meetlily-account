'use client';
import useLoginModal from '@/app/hooks/useLoginModal';
import useRegisterModal from '@/app/hooks/useRegisterModal';
import { SafeUser } from '@/app/types';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useCallback, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { AiFillGithub } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import Button from '../Button';
import Input from '../inputs/Input';
import Modal from './Modal';

interface LoginModalProps {
	currentUser?: SafeUser | null;
}
const LoginModal: React.FC<LoginModalProps> = ({ currentUser }) => {
	const router = useRouter();
	const registerModal = useRegisterModal();
	const loginModal = useLoginModal();
	const [isLoading, setIsLoading] = useState(false);
	// if(!currentUser){
	//     if(!registerModal.isOpen){
	//         loginModal.isOpen = true;
	//     }
	// }
	const toggle = useCallback(() => {
		loginModal.onClose();
		registerModal.onOpen();
	}, [loginModal, registerModal]);
	const {
		register,
		reset,
		handleSubmit,
		formState: { errors }
	} = useForm<FieldValues>({
		defaultValues: {
			email: '',
			password: ''
		}
	});
	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		setIsLoading(true);
		signIn('credentials', {
			...data,
			redirect: false
		})
			.then((callback) => {
				setIsLoading(false);
				if (callback?.ok) {
					toast.success('Logged in');
					router.refresh();
					return loginModal.onClose();
				}

				if (callback?.error) {
					toast.error(callback.error);
				}
			})
			.catch((error) => {
				toast.error('Something went wrong.');
			})
			.finally(() => {
				reset();
				loginModal.onClose();
				setIsLoading(false);
				router.push('/');
			});
	};

	const bodyContent = (
		<div
			className="
                flex
                flex-col
                gap-4
            "
		>
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
			<p className="py-2 text-sm font-thin text-center text-gray-400">or log in with</p>
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
					<div>First time user?</div>
					<div
						onClick={toggle}
						className="
                        text-neutral-800
                        cursor-pointer
                        hover:underline
                    "
					>
						Create an account.
					</div>
				</div>
			</div>
		</>
	);
	return (
		<Modal
			disabled={isLoading}
			isOpen={false}
			title="Log In"
			headerTitle="Log In"
			subtitle="To use this application, please log in to your account"
			actionLabel="Continue"
			onClose={loginModal.onClose}
			onSubmit={handleSubmit(onSubmit)}
			body={bodyContent}
			backgroundImage="/images/image.jpg"
			footer={footerContent}
			showLogo={false}
			hideClose={!currentUser ? true : false}
		/>
	);
};

export default LoginModal;

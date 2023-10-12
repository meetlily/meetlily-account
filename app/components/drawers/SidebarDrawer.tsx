'use client';
import useSidebarDrawer from '@/app/hooks/useSidebarDrawer';
import { signIn } from 'next-auth/react';
import { useCallback, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { AiFillGithub } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';

import { SafeUser } from '@/app/types';
import { Menu } from '@/app/types/menu';
import { useRouter } from 'next/navigation';
import Button from '../Button';
import Input from '../inputs/Input';
import SidebarNav from '../sidebar/SidebarNav';
import DrawerContent from './DrawerContent';

interface SidebarDrawerProps {
	currentUser?: SafeUser | null;
	data?: Menu | null;
}
const SidebarDrawer: React.FC<SidebarDrawerProps> = ({ currentUser, data }) => {
	const router = useRouter();
	const sidebarDrawer = useSidebarDrawer();
	const [isLoading, setIsLoading] = useState(false);
	const toggle = useCallback(() => {
		sidebarDrawer.onClose();
	}, [sidebarDrawer]);
	const {
		register,
		reset,
		handleSubmit,
		formState: { errors }
	} = useForm<FieldValues>({
		defaultValues: {}
	});
	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		setIsLoading(true);
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
		<DrawerContent id={'sidebar-drawer'} isOpen={false} onClose={sidebarDrawer.onClose}>
			<SidebarNav currentUser={currentUser} data={data} />
		</DrawerContent>
	);
};

export default SidebarDrawer;

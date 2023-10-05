'use client';
import ButtonComponent from '@/app/components/Button';
import AppIcons from '@/app/components/icons/AppIcons';
import { signIn } from 'next-auth/react';

const SocialButton = () => {
	return (
		<>
			<ButtonComponent
				label={'Google'}
				onClick={() => signIn('google')}
				classNames="w-full px-4 pl-2  text-gray-600"
				color="gray"
				size="lg"
				icon={AppIcons['google']}
				iconSize={24}
			/>
			<ButtonComponent
				label={'Github'}
				onClick={() => signIn('github')}
				classNames="w-full px-4 pl-2 text-gray-600"
				color="gray"
				size="lg"
				icon={AppIcons['github']}
				iconSize={24}
			/>
			{/* <ButtonComponent
				label={'LinkedIn'}
				onClick={() => signIn('linkedin')}
				classNames="w-full px-4 pl-2 text-gray-600"
				color="gray"
				size="lg"
				icon={AppIcons['linkedin']}
				iconSize={24}
			/> */}
		</>
	);
};

export default SocialButton;

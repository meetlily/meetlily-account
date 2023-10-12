'use client';

import useMainDrawer from '@/app/hooks/useMainDrawer';
import useSidebarDrawer from '@/app/hooks/useSidebarDrawer';
import { SafeUser } from '@/app/types';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import IconComponent from '../icons/IconComponent';
interface AvatarProps {
	image?: string;
	currentUser?: SafeUser | null;
	height?: number;
	width?: number;
}
const AvatarNav: React.FC<AvatarProps> = ({ image, currentUser, height, width }) => {
	if (!image) {
		image = '/images/placeholder.jpg';
	}
	const mainDrawer = useMainDrawer();
	const sidebarDrawer = useSidebarDrawer();

	const [isLoading, setIsLoading] = useState(false);
	const [showDrawer, setShowDrawer] = useState(false);

	useEffect(() => {}, [setShowDrawer]);
	const toggleMainDrawer = useCallback(() => {
		if (!mainDrawer.isOpen) {
			mainDrawer.onOpen();
		} else {
			mainDrawer.onClose();
		}
	}, [mainDrawer]);
	return (
		<>
			<div
				onClick={toggleMainDrawer}
				className="cursor-pointer flex flex-col items-center justify-center"
			>
				{currentUser && image ? (
					<Image
						className="rounded-full text-center mx-auto block hover:bg-white"
						src={image ? image : '/images/placeholder.jpg'}
						alt="Avatar"
						width={width}
						height={height}
					/>
				) : (
					<>
						<IconComponent
							size={34}
							iconName="user"
							class_name="border text-center mx-auto block text-gray-600 hover:bg-white border-gray-600 hover:border-gray-700 rounded-full p-1 transition"
						/>
					</>
				)}
			</div>
		</>
	);
};

export default AvatarNav;

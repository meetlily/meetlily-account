'use client';

import { SafeUser } from '@/app/types';
import { Avatar, Badge } from 'flowbite-react';
interface AvatarTextProps {
	image?: string;
	currentUser?: SafeUser | null;
	size?: string;
	rounded?: boolean;
}
const AvatarText: React.FC<AvatarTextProps> = ({ image, currentUser, size, rounded }) => {
	return (
		<>
			<Avatar size={size} rounded={rounded} img={image}>
				<div className="space-y-0 font-medium dark:text-white">
					<div>{currentUser?.name}</div>
					<div className="text-sm text-gray-500 dark:text-gray-400">{currentUser?.email}</div>
					<>
						{currentUser?.Role &&
							currentUser?.Role.map((role) => {
								<Badge>
									<p>{role?.name}</p>
								</Badge>;
							})}
					</>
				</div>
			</Avatar>
		</>
	);
};

export default AvatarText;

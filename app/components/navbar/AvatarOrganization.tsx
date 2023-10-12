'use client';

import { Avatar, Badge } from 'flowbite-react';
import {
	JSXElementConstructor,
	PromiseLikeOfReactNode,
	ReactElement,
	ReactNode,
	ReactPortal
} from 'react';
interface AvatarOrganizationProps {
	image?: string;
	organization?: any;
	size?: string;
	rounded?: boolean;
}
const AvatarOrganization: React.FC<AvatarOrganizationProps> = ({
	image,
	organization,
	size,
	rounded
}) => {
	return (
		<>
			<Avatar size={size} rounded={rounded} img={'https://www.meetlily.net/favicon.ico'}>
				<div className="space-y-0 font-medium dark:text-white">
					<div>Meetlily Advertising</div>
					<div className="text-sm text-gray-500 dark:text-gray-400">Software Company</div>
					<>
						{organization?.Role &&
							organization?.Role.map(
								(role: {
									name:
										| string
										| number
										| boolean
										| ReactElement<any, string | JSXElementConstructor<any>>
										| Iterable<ReactNode>
										| ReactPortal
										| PromiseLikeOfReactNode
										| null
										| undefined;
								}) => {
									<Badge>
										<p>{role?.name}</p>
									</Badge>;
								}
							)}
					</>
				</div>
			</Avatar>
		</>
	);
};

export default AvatarOrganization;

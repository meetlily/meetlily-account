'use client';

import { Avatar } from 'flowbite-react';
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
			{organization?.Organization &&
				organization?.Organization.map((org: any) => (
					<>
						{organization.Default.data.organizationId === org.id && (
							<Avatar size={size} rounded={rounded} img={org?.logo}>
								<div className="space-y-0 font-medium dark:text-white"></div>
								<div className="text-lg">{org?.name}</div>
								<div className="text-sm text-gray-500 dark:text-gray-400">{org?.industry}</div>
							</Avatar>
						)}
					</>
				))}
		</>
	);
};

export default AvatarOrganization;

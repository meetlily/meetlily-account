'use client';

import { Avatar, FlowbitePositions } from 'flowbite-react';

interface AvatarPlaceholderProps {
	rounded?: boolean;
	classNames?: string;
	bordered?: boolean;
	img?: string;
	alt?: string;
	stacked?: boolean;
	content?: React.ReactElement | undefined;
	status?: 'away' | 'busy' | 'offline' | 'online' | undefined; // online, busy, offline, away
	statPosition?: keyof FlowbitePositions | undefined; // <empty> for top-left, top-right, bottom-left, bottom-right
}
const AvatarPlaceholder: React.FC<AvatarPlaceholderProps> = ({
	rounded,
	classNames,
	bordered,
	img,
	alt,
	stacked,
	content: ContentText,
	status,
	statPosition
}) => {
	return (
		<>
			{ContentText && (
				<Avatar img={img} rounded>
					{ContentText}
				</Avatar>
			)}
			{!ContentText && (
				<div className="flex flex-wrap gap-2">
					{status ? (
						<Avatar
							stacked={stacked}
							statusPosition={statPosition}
							status={status}
							alt={alt}
							img={img}
							bordered={bordered}
							className={classNames}
							rounded={rounded}
						/>
					) : (
						<Avatar
							stacked={stacked}
							alt={alt}
							img={img}
							bordered={bordered}
							className={classNames}
							rounded={rounded}
						/>
					)}
				</div>
			)}
		</>
	);
};

export default AvatarPlaceholder;

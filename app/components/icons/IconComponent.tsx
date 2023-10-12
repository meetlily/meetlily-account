'use client';

import { IconType } from 'react-icons';
import { FaBan } from 'react-icons/fa6';
import AppIcons from './AppIcons';

interface IconComponentProps {
	iconName?: string;
	size?: number;
	class_name?: string;
	color?: string;
	customIcon?: IconType | null;
}

const IconComponent: React.FC<IconComponentProps> = ({
	iconName,
	size,
	class_name,
	color,
	customIcon: CustomIcon
}) => {
	if (!iconName) {
		iconName = 'ban';
	}

	const Icon = AppIcons[iconName];

	if (!size) {
		size = 18;
	}
	if (!class_name) {
		class_name = 'block mx-auto';
	}
	return (
		<>
			{Icon && !CustomIcon && (
				<div className={class_name}>
					<Icon size={size} color={color} />
				</div>
			)}
			{CustomIcon && (
				<div className={class_name}>
					<CustomIcon size={size} color={color} />
				</div>
			)}
			{!Icon && (
				<div className="text-neutral-400 text-center block mx-auto mb-1">
					<FaBan size={size} />
				</div>
			)}
		</>
	);
};

export default IconComponent;

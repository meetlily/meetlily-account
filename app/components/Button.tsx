'use client';

import { Button } from 'flowbite-react';
import { IconType } from 'react-icons';
interface ButtonProps {
	label: string;
	onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
	disabled?: boolean;
	outline?: boolean;
	size?: string;
	icon?: IconType;
	isProcessing?: boolean;
	color?: string;
	classNames?: string;
	pill?: boolean;
	iconSize?: number;
}
const ButtonComponent: React.FC<ButtonProps> = ({
	label,
	onClick,
	disabled,
	outline,
	size,
	icon: Icon,
	isProcessing,
	color,
	classNames,
	pill,
	iconSize
}) => {
	return (
		<Button
			color={color}
			size={size}
			isProcessing={isProcessing}
			onClick={onClick}
			disabled={disabled}
			className={classNames}
			pill={pill}
			outline={outline}
		>
			{Icon && <Icon size={iconSize} className="md:mr-2 md:ml-2 pl-0" />}
			<p className="hidden md:block" aria-hidden>
				{label}
			</p>
		</Button>
	);
};

export default ButtonComponent;

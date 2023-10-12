'use client';

import Link from 'next/link';
import { OrganizationType } from '../types';
import IconComponent from './icons/IconComponent';
interface ButtonIconProps {
	id?: string;
	label?: string;
	description?: string;
	showLabel?: boolean;
	onClick?: (item: any) => void;
	disabled?: boolean;
	outline?: boolean;
	size?: string;
	icon: string;
	iconSize?: number;
	iconPosition?: string;
	isProcessing?: boolean;
	color?: string;
	classNames?: string;
	pill?: boolean;
	link?: string;
	rounded?: boolean;
	inline?: boolean;
	drawer?: string;
	shadow?: boolean;
	data?: OrganizationType;
}
const ButtonIcon: React.FC<ButtonIconProps> = ({
	id,
	label,
	description,
	showLabel,
	onClick,
	disabled,
	color,
	outline,
	size,
	icon,
	isProcessing,
	classNames,
	pill,
	iconSize,
	iconPosition,
	link,
	rounded,
	inline,
	drawer,
	shadow,
	data
}) => {
	if (!iconPosition) {
		iconPosition = 'left';
	}
	if (!color) {
		color = 'gray';
	}
	if (link) {
		return (
			<Link href={link}>
				{icon && (
					<div
						className={`
					button-icon 
					absolute
					${iconPosition}-1
				`}
					>
						<IconComponent iconName={icon} size={iconSize} />
					</div>
				)}
				<span className="hidden md:block" aria-hidden>
					{showLabel ? label : ''}
				</span>
			</Link>
		);
	}
	let c = 'col';
	if (inline) {
		c = 'row';
	}
	return (
		<button
			id={id}
			onClick={onClick}
			className={`
				flex
				flex-${c}
				cursor-pointer
				relative
				items-center
				justify-center
				p-1
				${classNames}
				${size ? size : 'text-sm'}
				${outline ? 'border border-1' : 'border-0'}
				${
					color && outline
						? `border-${color}-400 text-${color}-800 dark:border-${color}-600 dark:text-${color}-500`
						: ''
				}
				${rounded ? 'rounded' : 'rounded-0'}
				${disabled ? 'disabled' : ''}
				${isProcessing ? 'loading' : ''}
				${shadow ? 'shadow' : 'shadow-none'}
				${color && pill ? `text-${color}-50 bg-${color}-800 hover:bg-${color}-400` : ''}
			`}
		>
			{icon && (
				<div
					className={`
					${inline && showLabel ? 'mr-2' : 'mr-0'}
					button-icon 
					${iconPosition}-1
				`}
				>
					<IconComponent iconName={icon} size={iconSize} />
				</div>
			)}
			{showLabel && (
				<div
					className={`
				${inline ? 'mt-0 pr-2' : 'mt-1'}
				font-semibold
				${color && pill ? `text-${color}-100 hover:text-${color}-800 hover:text-${color}-400` : ''}
			`}
					aria-hidden
				>
					{label}
				</div>
			)}
			{description && (
				<div
					className="h-4 overflow-hidden  text-neutral-400 text-xs text-ellipsis text-center dark:text-neutral-500"
					aria-hidden
				>
					{description}
				</div>
			)}
		</button>
	);
};

export default ButtonIcon;

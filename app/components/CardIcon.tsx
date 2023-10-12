'use client';

import type { PopoverInterface, PopoverOptions } from 'flowbite';
import { Popover } from 'flowbite';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { IconType } from 'react-icons';
import ButtonIcon from './ButtonIcon';
import IconComponent from './icons/IconComponent';

interface CardIconProps {
	module?: any;
	label: string;
	description?: string;
	onClick: () => void;
	disabled?: boolean;
	outline?: boolean;
	rounded?: boolean;
	small?: boolean;
	icon?: IconType;
	iconName?: string | null;
	iconSize?: number;
	fontColor?: string;
	fontSize?: number;
	shadow?: boolean;
	contentId?: string | null;
	buttonId?: string | null;
	showPopover?: boolean;
}
const CardIcon: React.FC<CardIconProps> = ({
	module,
	label,
	description,
	onClick,
	disabled,
	outline,
	rounded,
	small,
	icon: Icon,
	iconName,
	iconSize,
	fontColor,
	fontSize,
	shadow,
	contentId,
	buttonId,
	showPopover
}) => {
	const router = useRouter();
	const [isLoading, setIsLoading] = useState(false);
	if (!contentId) {
		contentId = 'popoverContent';
	}
	const $targetEl: HTMLElement = document.getElementById(contentId)!;
	if (!buttonId) {
		buttonId = 'popoverButton';
	}
	const $triggerEl: HTMLElement = document.getElementById(buttonId)!;
	// set the popover content element

	// set the element that triggers the popover using hover or click

	// options with default values
	const options: PopoverOptions = {
		placement: 'top',
		triggerType: 'hover',
		offset: 5,
		onHide: () => {},
		onShow: () => {},
		onToggle: () => {}
	};

	if ($targetEl) {
		/*
		 * targetEl: required
		 * triggerEl: required
		 * options: optional
		 */
		const popover: PopoverInterface = new Popover($targetEl, $triggerEl, options);

		//popover.show();
	}
	if (!fontColor) {
		fontColor = 'grey';
	}
	if (!fontSize) {
		fontSize = 2;
	}
	if (!iconName) {
		iconName = 'loading';
	}
	return (
		<>
			<ButtonIcon
				label={label}
				icon={iconName}
				size={'text-sm'}
				iconSize={iconSize}
				showLabel={true}
				iconPosition="left"
				id={buttonId}
				onClick={onClick}
				description={module?.short_description}
			/>
			{showPopover && (
				<div
					data-popover
					id={contentId}
					role="tooltip"
					className="absolute z-10 invisible inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800"
				>
					<div className="relative px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-gray-700">
						<div className="absolute left-2 top-2">
							<IconComponent iconName={iconName} size={18} />
						</div>
						<h2 className="font-semibold text-gray-900 text-md dark:text-white ml-5"> {label}</h2>
					</div>
					<div className="px-3 py-2">
						<p>{module?.description}</p>
					</div>
					<div data-popper-arrow></div>
				</div>
			)}
		</>
	);
};

export default CardIcon;

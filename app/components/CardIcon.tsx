'use client';

import type { PopoverInterface, PopoverOptions } from 'flowbite';
import { Popover } from 'flowbite';
import { IconType } from 'react-icons';
import Heading from './Heading';
import IconComponent from './icons/IconComponent';
import { useRouter } from 'next/navigation';
import { useCallback, useState } from 'react';
import Loader from './Loader';

interface CardIconProps {
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
}
const CardIcon: React.FC<CardIconProps> = ({
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
	buttonId
}) => {
	const router = useRouter()
	const [isLoading, setIsLoading] = useState(false)
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
		onHide: () => {
			console.log('popover is shown');
		},
		onShow: () => {
			console.log('popover is hidden');
		},
		onToggle: () => {
			console.log('popover is toggled');
		}
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
			
			
			<div
				id={buttonId}
				onClick={onClick}
				className={`
                flex 
                flex-col
				items-center
                py-2
                px-4
                text-center
                ${outline ? 'border-[1px]' : 'border-none'}
                ${rounded ? 'rounded-md' : 'rounded-none'}
                mt-2
                ${outline ? `border-${fontColor}-500` : 'border-black'}
                ${shadow ? `shadow` : 'shadow-none'}
                ${shadow ? `hover:shadow-lg` : 'hover:shadow-none'}
                ${shadow ? `hover:bg-${fontColor}-500` : `text-gray-700`}
                transition
                cursor-pointer
            `}
			>
				<IconComponent
					size={iconSize ? iconSize : 36}
					iconName={iconName}
					class_name="mt-2 mx-auto text-gray-600 hover:text-black transition text-center"
				/>
				<Heading size="text-sm font-semibold text-gray-700 transition" title={label} center />
			</div>
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
					<p>{description}</p>
				</div>
				<div data-popper-arrow></div>
			</div>
		</>
	);
};

export default CardIcon;

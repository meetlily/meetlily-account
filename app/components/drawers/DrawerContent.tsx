'use client';
import React, { useCallback, useEffect, useState } from 'react';

interface DrawerContentProps {
	isOpen: boolean;
	onClose?: () => void;
	onOpen?: () => void;
	id?: string;
	title?: string;
	subtitle?: string;
	header?: React.ReactElement;
	body?: React.ReactElement;
	footer?: React.ReactElement;
	primaryActionLabel?: string;
	primaryAction?: () => void;
	secondaryAction?: () => void;
	secondaryActionLabel?: string;
	color?: string;
	xPosition?: string;
	yPosition?: string;
	width?: string;
	overlay?: boolean;
	className?: string;
	disabled?: boolean;
}
const DrawerContent: React.FC<DrawerContentProps> = ({
	isOpen,
	onClose,
	onOpen,
	title,
	subtitle,
	header,
	body,
	footer,
	id,
	primaryAction,
	primaryActionLabel,
	secondaryAction,
	secondaryActionLabel,
	color,
	xPosition,
	yPosition,
	width,
	overlay,
	className,
	disabled
}) => {
	const [showDrawer, setShowDrawer] = useState(isOpen);

	useEffect(() => {
		setShowDrawer(isOpen);
	}, [isOpen, setShowDrawer]);
	if (!xPosition) {
		xPosition = 'left';
	}
	if (!yPosition) {
		yPosition = 'top';
	}
	if (!color) {
		color = 'white';
	}
	let borderPos = 'border-r';
	let translate = `-translate-x-full`;
	if (xPosition === 'right') {
		borderPos = 'border-l';
		translate = 'translate-x-full';
		// if (width) {
		// 	translate = `translate-x-${width}`;
		// }
	}
	const handlePrimaryAction = useCallback(() => {
		if (disabled || !primaryAction) {
			return;
		}
		primaryAction();
	}, [disabled, primaryAction]);
	const handleSecondaryAction = useCallback(() => {
		if (disabled || !secondaryAction) {
			return;
		}
		secondaryAction();
	}, [disabled, secondaryAction]);
	return (
		<>
			<div
				className={`
			${yPosition}-0
			${xPosition}-0 
			${width}
			bg-${color}
			${borderPos}
			${showDrawer ? 'translate-x-0' : translate} 
			fixed 
			z-[42]
			rounded-0
			h-screen 
			transition-transform 
		    py-10	
			border-gray-200 
			dark:bg-gray-800 
			dark:border-gray-700 
			duration-300 
			ease-in-out
			
			`}
				aria-label={title}
				id={id}
			>
				{header && <div className="flex absolute top-0 left-0 w-full">{header}</div>}
				{body && <div className="overflow-y-auto h-full">{body}</div>}
				{footer && <div className="flex absolute bottom-0 left-0 w-full">{footer}</div>}
			</div>
			{overlay && (
				<div
					className="bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40"
					hidden={!showDrawer}
					onClick={onClose}
				></div>
			)}
		</>
	);
};

export default DrawerContent;

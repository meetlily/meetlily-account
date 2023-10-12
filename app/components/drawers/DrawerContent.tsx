'use client';
import React, { useEffect, useState } from 'react';

interface DrawerContentProps {
	isOpen: boolean;
	onClose?: () => void;
	onOpen?: () => void;
	children: React.ReactNode; // Add the children prop
	color?: string;
	xPosition?: string;
	yPosition?: string;
	id?: string;
	label?: string;
	width?: number;
	overlay?: boolean;
}
const DrawerContent: React.FC<DrawerContentProps> = ({
	isOpen,
	onClose,
	onOpen,
	id,
	label,
	xPosition,
	yPosition,
	color,
	children,
	width,
	overlay
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
	if (!width) {
		width = 60;
	}
	if (!color) {
		color = 'white';
	}
	let borderPos = 'border-r';
	let translate = '-translate-x-full';
	if (xPosition === 'right') {
		borderPos = 'border-l';
		translate = 'translate-x-full';
	}
	return (
		<div
			className={`
			fixed 
			${yPosition}-0
			${xPosition}-0 
			z-40 
			rounded-0
			h-screen 
			w-${width}
			transform
			transition-transform 
			bg-${color}
			${borderPos}	
		    py-10	
			border-gray-200 
			dark:bg-gray-800 
			dark:border-gray-700 
			duration-300 
			ease-in-out
			${showDrawer ? 'translate-x-0' : translate} 
			
			`}
			aria-label={label}
			id={id}
		>
			{children}
		</div>
	);
};

export default DrawerContent;

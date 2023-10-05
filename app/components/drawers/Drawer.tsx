'use client';
import React from 'react';

interface DrawerProps {
	isOpen: boolean;
	onClose: () => void;
	children: React.ReactNode; // Add the children prop
	color?: string;
	position?: string;
}
const Drawer: React.FC<DrawerProps> = ({ isOpen, onClose, position, color, children }) => {
	return (
		<div
			className={`fixed top-4 inset-y-0 left-0 w-full bg-gray-50 shadow-lg transform ${
				isOpen ? 'translate-x-0' : '-translate-x-full'
			} transition-transform duration-300 ease-in-out`}
		>
			{children}
		</div>
	);
};

export default Drawer;

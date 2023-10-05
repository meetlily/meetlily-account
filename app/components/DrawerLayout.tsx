'use client';
import { useState } from 'react';
import { SafeUser } from '../types';
import Dashboard from './Dashboard';

interface DrawerLayoutProps {
	currentUser?: SafeUser | null;
	children?: React.ReactNode;
	showSidebar?: boolean;
}
const DrawerLayout: React.FC<DrawerLayoutProps> = ({ currentUser, children, showSidebar }) => {
	const [isLoading, setIsLoading] = useState(false);
	const [isDrawerOpen, setIsDrawerOpen] = useState(true);

	const toggleDrawer = () => {
		setIsDrawerOpen(!isDrawerOpen);
	};

	return (
		<>
			<Dashboard currentUser={currentUser} />
		</>
	);
};

export default DrawerLayout;

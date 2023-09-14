'use client';

'use client'
import { SafeUser } from '../types';
import { useState } from 'react';
import DrawerButton from './drawers/DrawerButton';
import DrawerContent from './drawers/DrawerContent';

interface DrawerLayoutProps {
	currentUser?: SafeUser | null;
    children?: React.ReactNode;
	showSidebar?: boolean;
}
const DrawerLayout: React.FC<DrawerLayoutProps> = ({ currentUser, children, showSidebar }) => {
    const [isLoading, setIsLoading] = useState(false);

	return (
		<>
            <DrawerContent />
		</>
	);
};

export default DrawerLayout;

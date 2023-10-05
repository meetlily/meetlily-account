'use client';

import { CustomFlowbiteTheme, Flowbite } from 'flowbite-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { SafeUser } from '../types';
import Loader from './Loader';
import SideBarLayout from './SideBarLayout';
import DeleteModal from './modals/DeleteModal';
import AdminNavbar from './navbar/AdminNavbar';
import ToasterProvider from './providers/ToasterProvider';
const customTheme: CustomFlowbiteTheme = {
	button: {
		color: {
			primary: 'bg-red-500 hover:bg-red-600'
		}
	}
};
interface AdminLayoutProps {
	currentUser?: SafeUser | null;
	children: React.ReactNode;
	showSidebar?: boolean;
	showNavbar?: boolean;
	showNavbarSearch?: boolean;
	permissions?: any;
}
const AdminLayout: React.FC<AdminLayoutProps> = ({
	currentUser,
	children,
	showSidebar,
	showNavbar,
	showNavbarSearch,
	permissions
}) => {
	const [isLoading, setIsLoading] = useState(false);
	const router = useRouter();
	if (!currentUser) {
		router.push('/sign-in');
	}
	return (
		<>
			<Flowbite theme={{ theme: customTheme }}>
				{isLoading && <Loader size="xl" />}
				<DeleteModal data={null} />
				<ToasterProvider />
				{showNavbar && (
					<header className="bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700 fixed left-0 right-0 top-0 z-50">
						<AdminNavbar currentUser={currentUser} showSearch={showNavbarSearch} />
					</header>
				)}

				<div className="flex flex-row items-start relative bg-white">
					{showSidebar && (
						<aside className="fixed h-full">
							<SideBarLayout />
						</aside>
					)}
					<main
						className={`relative w-full h-full mt-[39px] z-45 bg-white overflow-auto 
					${showSidebar ? 'md:ml-64' : 'md:ml-0'}
				`}
					>
						{children}
					</main>
				</div>
			</Flowbite>
		</>
	);
};

export default AdminLayout;

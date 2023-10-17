'use client';
import useMainDrawer from '@/app/hooks/useMainDrawer';
import useSidebarDrawer from '@/app/hooks/useSidebarDrawer';
import { SafeUser } from '@/app/types';
import { Navbar } from 'flowbite-react';
import { useCallback, useEffect, useState } from 'react';
import LoginButton from '../LoginButton';
import ThemeToggle from '../ThemeToggle';
import IconComponent from '../icons/IconComponent';
import AvatarNav from './AvatarNav';
import Logo from './Logo';
import NavSearch from './NavSearch';
interface ContentData {
	id: string;
	name: string;
	slug: string;
	description: string;
	icon: string;
	active: boolean;
}
interface AdminNavbarProps {
	currentUser?: SafeUser | null;
	showSearch?: boolean;
}
const AdminNavbar: React.FC<AdminNavbarProps> = ({ currentUser, showSearch }) => {
	const mainDrawer = useMainDrawer();
	const sidebarDrawer = useSidebarDrawer();
	const [tabContent, setTabContent] = useState<ContentData[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	const [showDrawer, setShowDrawer] = useState(false);
	const tabData: ContentData[] = tabContent;
	useEffect(() => {
		setIsLoading(true);
		// Fetch the data from the API
		fetch('/api/category')
			.then((response) => response.json())
			.then((data) => setTabContent(data))

			.catch((error) => console.error('Error fetching sections:', error))
			.finally(() => setIsLoading(false));
	}, [setTabContent]);

	const toggle = useCallback(() => {
		if (!sidebarDrawer.isOpen) {
			sidebarDrawer.onOpen();
		} else {
			sidebarDrawer.onClose();
		}
	}, [sidebarDrawer]);
	return (
		<>
			<Navbar>
				<div className="flex md:order-0 gap-4 pr-2">
					{currentUser && (
						<div
							onClick={toggle}
							className="p-2 mr-2 cursor-pointer hover:text-gray-50 dark:focus:bg-gray-700 dark:focus:ring-gray-700 dark:text-gray-400 dark:hover:text-white"
						>
							<span className="sr-only">Toggle sidebar</span>
							<p>
								<IconComponent iconName="sidebar" />
							</p>
						</div>
					)}

					<Navbar.Brand href="/dashboard" className="gap-4 pl-2  w-[120px] md:w-[280px]">
						<Logo color={'white'} onClick={() => {}} height={120} width={120} />
					</Navbar.Brand>
					{showSearch && <NavSearch />}
				</div>

				<div className="flex md:order-2 gap-4 pr-2">
					{currentUser ? (
						<>
							<ThemeToggle />
							<AvatarNav
								currentUser={currentUser}
								width={30}
								height={30}
								image={currentUser.image ? currentUser.image : '/images/placeholder.jpg'}
							/>
						</>
					) : (
						<LoginButton />
					)}
				</div>
			</Navbar>
		</>
	);
};

export default AdminNavbar;

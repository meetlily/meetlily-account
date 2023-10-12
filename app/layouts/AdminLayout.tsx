'use client';

import useSidebarDrawer from '@/app/hooks/useSidebarDrawer';
import accountNav from '@/data/accountNav.json';
import sidebars from '@/data/sidebar.json';
import { Flowbite } from 'flowbite-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Container from '../components/Container';
import Loader from '../components/Loader';
import DrawerContent from '../components/drawers/DrawerContent';
import MainDrawer from '../components/drawers/MainDrawer';
import DeleteModal from '../components/modals/DeleteModal';
import AdminNavbar from '../components/navbar/AdminNavbar';
import ToasterProvider from '../components/providers/ToasterProvider';
import SidebarNav from '../components/sidebar/SidebarNav';
import useMainDrawer from '../hooks/useMainDrawer';
import customTheme from '../theme/theme';
import { SafeUser } from '../types';

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
	const sidebarDrawer = useSidebarDrawer();
	const mainDrawer = useMainDrawer();
	return (
		<>
			<div className=" text-gray-600 antialiased  dark:text-gray-50">
				<Flowbite theme={{ theme: customTheme }}>
					<div className="flex flex-col">
						{isLoading && <Loader size="xl" />}
						<DeleteModal data={null} />
						<ToasterProvider />
						{showNavbar && <AdminNavbar currentUser={currentUser} showSearch={false} />}
						<main className="relative z-0 flex flex-col max-h-screen w-full overflow-y-scroll overflow-x-hidden pt-10 pb-10">
							{/* <Card className="container mt-2 mx-auto">
								<div className="flex flex-col items-center"></div>
							</Card> */}
							<Container>{children}</Container>
						</main>
						<DrawerContent
							id={'main-drawer'}
							isOpen={mainDrawer.isOpen}
							onClose={mainDrawer.onClose}
							xPosition="right"
							yPosition="top"
						>
							<MainDrawer currentUser={currentUser} data={accountNav} />
						</DrawerContent>
						<DrawerContent
							id={'sidebar-drawer'}
							isOpen={sidebarDrawer.isOpen}
							onClose={sidebarDrawer.onClose}
						>
							<SidebarNav currentUser={currentUser} data={sidebars} />
						</DrawerContent>
					</div>
				</Flowbite>
			</div>
		</>
	);
};

export default AdminLayout;

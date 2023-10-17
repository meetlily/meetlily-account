'use client';

import useSidebarDrawer from '@/app/hooks/useSidebarDrawer';
import accountNav from '@/data/accountNav.json';
import bottomSideNav from '@/data/bottomSidebarNav.json';
import sidebars from '@/data/sidebar.json';
import { Flowbite } from 'flowbite-react';
import { redirect, useParams, usePathname, useSearchParams } from 'next/navigation';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { useEffect, useState } from 'react';
import Container from '../components/Container';
import DefaultStickyBanner from '../components/DefaultStickyBanner';
import DrawerContent from '../components/drawers/DrawerContent';
import MainDrawer from '../components/drawers/MainDrawer';
import ModuleSettings from '../components/modules/ModuleSettings';
import AdminNavbar from '../components/navbar/AdminNavbar';
import AdminNavbarBottom from '../components/navbar/AdminNavbarBottom';
import ToasterProvider from '../components/providers/ToasterProvider';
import SidebarNav from '../components/sidebar/SidebarNav';
import useDeleteModal from '../hooks/useDeleteModal';
import useMainDrawer from '../hooks/useMainDrawer';
import useModuleOptionDrawer from '../hooks/useModuleOptionDrawer';
import customTheme from '../theme/theme';
import { SafeUser } from '../types';
import { Menu } from '../types/menu';

interface AdminLayoutProps {
	currentUser?: SafeUser | null;
	children: React.ReactNode;
	showSidebar?: boolean;
	showNavbar?: boolean;
	showNavbarSearch?: boolean;
	permissions?: any;
	fluid?: boolean;
}
const AdminLayout: React.FC<AdminLayoutProps> = ({
	currentUser,
	children,
	showSidebar,
	showNavbar,
	showNavbarSearch,
	permissions,
	fluid
}) => {
	const pathname = usePathname();
	const params = useParams();
	const searchParams = useSearchParams();
	const [isLoading, setIsLoading] = useState(false);

	const sidebarDrawer = useSidebarDrawer();
	const mainDrawer = useMainDrawer();
	const deleteModal = useDeleteModal();
	const moduleOptionDrawer = useModuleOptionDrawer();
	const bottomSide: Menu = bottomSideNav.module;

	useEffect(() => {
		if (!currentUser) {
			redirect('/sign-in');
		}
		NProgress.done();
		return () => {
			NProgress.start();
		};
	}, [currentUser]);
	return (
		<>
			<div className=" text-gray-600 antialiased bg-gray-100  dark:text-gray-50 dark:bg-gray-900 h-screen  max-h-screen overflow-scroll">
				<Flowbite theme={{ theme: customTheme }}>
					<ToasterProvider />
					<DefaultStickyBanner show={false} />
					{showNavbar && <AdminNavbar currentUser={currentUser} showSearch={false} />}
					<AdminNavbarBottom />
					<main className="relative z-0 flex flex-col w-full overflow-auto">
						<Container fluid={fluid}>{children}</Container>
					</main>

					<DrawerContent
						id={'main-drawer'}
						isOpen={mainDrawer.isOpen}
						onClose={mainDrawer.onClose}
						xPosition="right"
						yPosition="top"
						overlay
						body={<MainDrawer currentUser={currentUser} data={accountNav} />}
					/>
					<DrawerContent
						id={'sidebar-drawer'}
						isOpen={sidebarDrawer.isOpen}
						onClose={sidebarDrawer.onClose}
						xPosition="left"
						yPosition="top"
						overlay
						body={<SidebarNav currentUser={currentUser} data={sidebars} />}
					/>
					<DrawerContent
						id={'module-option-drawer'}
						isOpen={moduleOptionDrawer.isOpen}
						onClose={moduleOptionDrawer.onClose}
						xPosition="right"
						yPosition="top"
						overlay
						width="w-[500px]"
						body={<ModuleSettings />}
					/>
				</Flowbite>
			</div>
		</>
	);
};

export default AdminLayout;

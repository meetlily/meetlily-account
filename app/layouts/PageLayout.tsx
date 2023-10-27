'use client';

import customTheme from '@/app/theme/theme';
import accountNav from '@/data/accountNav.json';
import sidebars from '@/data/sidebar.json';
import { Flowbite } from 'flowbite-react';
import { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import { useParams, usePathname, useSearchParams } from 'next/navigation';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { useCallback, useEffect, useState } from 'react';
import DrawerContent from '../components/drawers/DrawerContent';
import MainDrawer from '../components/drawers/MainDrawer';
import ModuleSettings from '../components/modules/ModuleSettings';
import AdminNavbar from '../components/navbar/AdminNavbar';
import SidebarNav from '../components/sidebar/SidebarNav';
import useDeleteModal from '../hooks/useDeleteModal';
import useMainDrawer from '../hooks/useMainDrawer';
import useModuleOptionDrawer from '../hooks/useModuleOptionDrawer';
import useSidebarDrawer from '../hooks/useSidebarDrawer';
import { SafeUser } from '../types';
interface metaData {
	title: string;
	description: string;
}
const font = Open_Sans({
	subsets: ['latin']
});
interface PageLayoutProps {
	metadata?: Metadata;
	currentUser?: SafeUser | null;
	children: React.ReactNode;
	showSidebar: boolean;
	hideNavbar: boolean;
}
const PageLayout: React.FC<PageLayoutProps> = ({
	metadata,
	currentUser,
	children,
	showSidebar,
	hideNavbar
}) => {
	const metaData: Metadata = {
		title: metadata?.title,
		description: metadata?.description
	};
	const pathname = usePathname();
	const params = useParams();
	const searchParams = useSearchParams();
	const [isLoading, setIsLoading] = useState(false);

	const sidebarDrawer = useSidebarDrawer();
	const mainDrawer = useMainDrawer();
	const deleteModal = useDeleteModal();
	const moduleOptionDrawer = useModuleOptionDrawer();

	useEffect(() => {
		//console.log(pathname, searchParams);
		NProgress.done();
		return () => {
			//console.log(pathname, searchParams);
			NProgress.start();
		};
	}, [pathname, searchParams]);
	const handleDrawerClose = useCallback((isOpen: boolean, drawer: any) => {
		console.log(isOpen, drawer);
		if (isOpen) {
			drawer.isOpen = false;
			drawer.onClose();
		}
	}, []);
	return (
		<>
			<Flowbite theme={{ theme: customTheme }}>
				{!hideNavbar && <AdminNavbar currentUser={currentUser} />}
				{children}
				<DrawerContent
					dismissable={true}
					id={'main-drawer'}
					isOpen={mainDrawer.isOpen}
					onClose={() => handleDrawerClose(mainDrawer.isOpen, mainDrawer)}
					xPosition="right"
					yPosition="top"
					overlay
					body={<MainDrawer currentUser={currentUser} data={accountNav} />}
				/>
				<DrawerContent
					dismissable={true}
					id={'sidebar-drawer'}
					isOpen={sidebarDrawer.isOpen}
					onClose={() => handleDrawerClose(sidebarDrawer.isOpen, sidebarDrawer)}
					xPosition="left"
					yPosition="top"
					overlay
					body={<SidebarNav currentUser={currentUser} data={sidebars} />}
				/>
				<DrawerContent
					id={'module-option-drawer'}
					isOpen={moduleOptionDrawer.isOpen}
					onClose={() => handleDrawerClose(moduleOptionDrawer.isOpen, moduleOptionDrawer)}
					xPosition="right"
					yPosition="top"
					overlay
					width="w-[500px]"
					body={<ModuleSettings />}
				/>
			</Flowbite>
		</>
	);
};

export default PageLayout;

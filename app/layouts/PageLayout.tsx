'use client';

import customTheme from '@/app/theme/theme';
import { Flowbite } from 'flowbite-react';
import { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import { useParams, usePathname, useSearchParams } from 'next/navigation';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { useEffect } from 'react';
import AdminNavbar from '../components/navbar/AdminNavbar';
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
	useEffect(() => {
		//console.log(pathname, searchParams);
		NProgress.done();
		return () => {
			//console.log(pathname, searchParams);
			NProgress.start();
		};
	}, [pathname, searchParams]);
	return (
		<>
			<Flowbite theme={{ theme: customTheme }}>
				{!hideNavbar && <AdminNavbar currentUser={currentUser} />}
				{children}
			</Flowbite>
		</>
	);
};

export default PageLayout;

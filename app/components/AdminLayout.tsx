'use client';

import type { CustomFlowbiteTheme } from 'flowbite-react';
import { Flowbite } from 'flowbite-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { SafeUser } from '../types';
import Loader from './Loader';
import SideBarLayout from './SideBarLayout';
import DeleteModal from './modals/DeleteModal';
import AdminNavbar from './navbar/AdminNavbar';
import ToasterProvider from './providers/ToasterProvider';
const customTheme: CustomFlowbiteTheme = {
	sidebar: {
		root: {
			base: 'h-full fixed top-10  z-20 overflow-y-auto overflow-x-hidden bg-gray-50 py-0 dark:bg-gray-800 border-r mb-10 pb-10',
			collapsed: {
				on: 'w-16',
				off: 'w-64'
			},
			inner: ''
		},
		collapse: {
			button:
				'group flex w-full items-center rounded-lg p-2 text-base font-normal text-gray-900 transition duration-75 hover:text-cyan-500 dark:text-white dark:hover:bg-gray-700',
			icon: {
				base: 'h-6 w-6 text-gray-900 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white',
				open: {
					off: '',
					on: 'text-gray-900'
				}
			},
			label: {
				base: 'ml-3 flex-1 whitespace-nowrap text-left',
				icon: {
					base: 'h-6 w-6 transition ease-in-out delay-0',
					open: {
						on: 'rotate-180',
						off: ''
					}
				}
			},
			list: 'space-y-2 py-2'
		},
		cta: {
			base: 'mt-0 rounded-lg p-4 bg-gray-100 dark:bg-gray-700',
			color: {
				blue: 'bg-cyan-50 dark:bg-cyan-900',
				dark: 'bg-dark-50 dark:bg-dark-900',
				failure: 'bg-red-50 dark:bg-red-900',
				gray: 'bg-alternative-50 dark:bg-alternative-900',
				green: 'bg-green-50 dark:bg-green-900',
				light: 'bg-light-50 dark:bg-light-900',
				red: 'bg-red-50 dark:bg-red-900',
				purple: 'bg-purple-50 dark:bg-purple-900',
				success: 'bg-green-50 dark:bg-green-900',
				yellow: 'bg-yellow-50 dark:bg-yellow-900',
				warning: 'bg-yellow-50 dark:bg-yellow-900'
			}
		},
		item: {
			base: 'flex items-center justify-center rounded-lg p-2 text-base font-normal text-gray-900 hover:text-cyan-500 dark:text-white dark:hover:bg-gray-700',
			active: 'bg-gray-100 dark:bg-gray-700',
			collapsed: {
				insideCollapse: 'group w-full pl-8 transition duration-75',
				noIcon: 'font-bold'
			},
			content: {
				base: 'px-3 flex-1 whitespace-nowrap'
			},
			icon: {
				base: 'h-6 w-6 flex-shrink-0 text-gray-900 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white',
				active: 'text-gray-900 dark:text-gray-100'
			},
			label: '',
			listItem: ''
		},
		items: '',
		itemGroup:
			'mt-0 space-y-2 border-t border-gray-200 pt-4 first:mt-0 first:border-t-0 first:pt-0 dark:border-gray-700',
		logo: {
			base: 'mb-5 flex items-center pl-2.5',
			collapsed: {
				on: 'hidden',
				off: 'self-center whitespace-nowrap text-xl font-semibold dark:text-white'
			},
			img: 'mr-3 h-6 sm:h-7'
		}
	},
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

	return (
		<>
			<Flowbite theme={{ theme: customTheme }}>
				<div className="flex flex-row h-full w-screen overflow-hidden">
					{isLoading && <Loader size="xl" />}
					<DeleteModal data={null} />

					<ToasterProvider />
					{showNavbar && <AdminNavbar currentUser={currentUser} showSearch={showNavbarSearch} />}
					<main className="relative z-0 flex flex-col w-full mt-10 ml-64 overflow-y-scroll overflow-x-hidden pb-10">
						{children}
					</main>
					{showSidebar && <SideBarLayout />}
				</div>
			</Flowbite>
		</>
	);
};

export default AdminLayout;

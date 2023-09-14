'use client';

import SideBarLayout from './SideBarLayout';
import { SafeUser } from '../types';
import sidebar from '@/data/sidebar.json';
import { Sidebar } from 'flowbite-react';
import SidebarCTA from './sidebar/SidebarCTA';
import SidebarItem from './sidebar/SidebarItem';
import { useState } from 'react';
import Loader from './Loader';
import AdminNavbar from './navbar/AdminNavbar';
import ToasterProvider from './providers/ToasterProvider';


interface AdminLayoutProps {
	currentUser?: SafeUser | null;
    children: React.ReactNode;
	showSidebar?: boolean;
	showNavbar?: boolean;
	showNavbarSearch?: boolean;
	permissions?: any;
}
const AdminLayout: React.FC<AdminLayoutProps> = ({ currentUser, children, showSidebar, showNavbar, showNavbarSearch, permissions }) => {
    const [isLoading, setIsLoading] = useState(false);
	console.log(currentUser);
	return (
		<>
        {isLoading && (
            <Loader size='xl'/>
        )}
		<ToasterProvider />
			{showNavbar && (
				<header className="bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700 fixed left-0 right-0 top-0 z-50">
					<AdminNavbar currentUser={currentUser} showSearch={showNavbarSearch}/>
				</header>
			)}
			<div className='flex flex-row items-start relative bg-white'>
				{showSidebar && (
				<aside className="fixed top-0 left-0 z-40 w-64 h-screen pt-14 transition-transform -translate-x-full bg-gray-100 border-r md:translate-x-0 dark:bg-gray-800 dark:border-gray-700">
					<SideBarLayout showSidebar={showSidebar} classNames='border-r'>
						<Sidebar.Items>
							<>
								{sidebar.map((side, i) => (
									<>
										<Sidebar.ItemGroup key={i}>
											{side.group === 'cta' && <SidebarCTA show={true}/>}
											{side.name && (
												<SidebarItem
													key={side.name}
													label={side.name}
													iconName={side.group}
													subItems={side.items}
												/>
											)}
											{!side.name && (
												<>
													{side.items.length > 0 &&
														side.items.map((item, k) => (
															<>
																{item && typeof item === 'string' && (
																	<SidebarItem key={item} label={item} iconName={'ban'} />
																)}
																{item && typeof item === 'object' && (
																	<SidebarItem
																		key={item.slug}
																		label={item.name}
																		iconName={item.icon_name}
																		href={`/admin/${item.slug}`}
																	/>
																)}
															</>
														))}
												</>
											)}
										</Sidebar.ItemGroup>
									</>
								))}
							</>
						</Sidebar.Items>
					</SideBarLayout>
				</aside>
				)}
				<main className={`relative w-full h-full mt-[39px] z-45 bg-white overflow-auto
					${showSidebar ? 'md:ml-64': '' }
				`}
				>
				{children}	
				</main>
            </div>
		</>
	);
};

export default AdminLayout;

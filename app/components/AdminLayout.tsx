'use client';

import Dashboard from './Dashboard';
import MainNavbar from './navbar/MainNavbar';
import SideBarLayout from './SideBarLayout';

import { SafeUser } from '../types';

import sidebar from '@/data/sidebar.json';
import { Sidebar } from 'flowbite-react';
import SidebarCTA from './sidebar/SidebarCTA';
import SidebarItem from './sidebar/SidebarItem';
import { useState } from 'react';
import Loader from './Loader';


interface AdminLayoutProps {
	currentUser?: SafeUser | null;
    children: React.ReactNode;
	showSidebar?: boolean;
}
const AdminLayout: React.FC<AdminLayoutProps> = ({ currentUser, children, showSidebar }) => {
    const [isLoading, setIsLoading] = useState(false);

	return (
		<>
        {isLoading && (
            <Loader size='xl'/>
        )}
			<header className="bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700 fixed left-0 right-0 top-0 z-50">
				<MainNavbar currentUser={currentUser} />
			</header>
			<div className='flex flex-row items-start relative'>
				{showSidebar && (
				<aside className="fixed top-0 left-0 z-40 w-64 h-screen pt-14 transition-transform -translate-x-full bg-gray-100 border-r border-gray-200 md:translate-x-0 dark:bg-gray-800 dark:border-gray-700">
					<SideBarLayout showSidebar={showSidebar}>
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
				<main className={`relative w-full h-auto mt-[58px] z-45 bg-white border-l border-r overflow-hidden
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

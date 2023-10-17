'use client';

import { SafeUser } from '@/app/types';
import { Menu } from '@/app/types/menu';
import bottomSideNav from '@/data/bottomSidebarNav.json';
import { Sidebar } from 'flowbite-react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { useCallback, useEffect, useState } from 'react';

import AppIcons from '../icons/AppIcons';
import AvatarOrganization from '../navbar/AvatarOrganization';
import SidebarBottomSettings from './SidebarBottomSettings';
interface SidebarNavProps {
	currentUser?: SafeUser | null;
	data?: Menu | null;
}
const SidebarNav: React.FC<SidebarNavProps> = ({ currentUser, data }) => {
	const bottomSide: Menu = bottomSideNav.left;
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const [isActive, setIsActive] = useState();
	useEffect(() => {
		//NProgress.done();
		console.log(pathname, 'pathname');
		return () => {
			//NProgress.start();
		};
	}, [pathname, searchParams]);
	const handleSidebarClick = useCallback(
		(item: any) => {
			NProgress.start();
			if (item.module === 'applications') {
				router.push(`/${item.module}/${item.slug}`);
			} else if (item.link) {
				router.push(`${item.link}`);
			} else {
				router.push(`/admin/${item.slug}`);
			}
		},
		[router]
	);
	return (
		<>
			<Sidebar aria-label="Sidebar Navigation">
				<div className="py-4 mb-2 border-b w-full bg-gray-50 dark:border-gray-700 dark:bg-gray-800">
					<AvatarOrganization
						organization={currentUser}
						image={currentUser?.image || '/images/placeholder.jpg'}
						size="md"
					/>
				</div>

				<Sidebar.Items>
					<Sidebar.ItemGroup>
						{data?.map((sidebar) => (
							<>
								{sidebar?.items && sidebar?.items.length > 0 ? (
									<>
										<Sidebar.ItemGroup>
											<p>{sidebar.name}</p>
											{sidebar?.items.map((item: any) => (
												<Sidebar.Item
													key={item.slug}
													//href={`/admin/${item.slug}`}
													onClick={() => handleSidebarClick(item)}
													icon={item?.icon_name && AppIcons[item?.icon_name]}
													className={`${pathname === item.link ? 'font-bold text-cyan-500' : ''}`}
												>
													<p>{item.name}</p>
												</Sidebar.Item>
											))}
										</Sidebar.ItemGroup>
									</>
								) : (
									<Sidebar.Item
										key={sidebar.name}
										//href={`${sidebar.link}`}
										onClick={() => handleSidebarClick(sidebar)}
										icon={AppIcons[sidebar?.icon_name]}
										className={`${pathname === sidebar.link ? 'font-bold text-cyan-500' : ''}`}
									>
										<p>{sidebar.name}</p>
									</Sidebar.Item>
								)}
							</>
						))}
					</Sidebar.ItemGroup>
				</Sidebar.Items>
				<SidebarBottomSettings show={true} items={bottomSide} drawer={'sidebar-drawer'} />
			</Sidebar>
		</>
	);
};

export default SidebarNav;

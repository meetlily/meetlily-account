'use client';

import { SafeUser } from '@/app/types';
import { Menu } from '@/app/types/menu';
import bottomSideNav from '@/data/bottomSidebarNav.json';
import { Sidebar } from 'flowbite-react';
import { usePathname, useRouter } from 'next/navigation';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { useCallback } from 'react';
import AppIcons from '../icons/AppIcons';
import AvatarText from '../navbar/AvatarText';
import SidebarBottomSettings from '../sidebar/SidebarBottomSettings';
interface MainDrawerProps {
	currentUser?: SafeUser | null;
	data?: Menu | null;
}
const MainDrawer: React.FC<MainDrawerProps> = ({ currentUser, data }) => {
	const router = useRouter();
	const pathname = usePathname();
	if (!currentUser?.image || currentUser?.image === '') {
		const cUser = {
			...currentUser,
			image: currentUser?.image
		};
		console.log(cUser);
	}
	const handleSidebarClick = useCallback(
		(item: any) => {
			console.log(item);
			NProgress.start();

			router.push(`${item.link}`);
		},
		[router]
	);
	return (
		<Sidebar aria-label="Account Navigation">
			<div className="py-4 mb-2 border-b w-full bg-gray-50 dark:border-gray-700 dark:bg-gray-800">
				<AvatarText
					currentUser={currentUser}
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
												//onClick={() => router.push(`/admin/${item?.slug}`)}
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
									//onClick={() => router.push(`${sidebar?.link}`)}
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

			<SidebarBottomSettings show={true} items={bottomSideNav.right} drawer={'Account'} />
		</Sidebar>
	);
};

export default MainDrawer;

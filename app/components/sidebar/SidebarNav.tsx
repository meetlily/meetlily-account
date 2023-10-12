'use client';

import { SafeUser } from '@/app/types';
import { Menu } from '@/app/types/menu';
import bottomSideNav from '@/data/bottomSidebarNav.json';
import { Sidebar } from 'flowbite-react';
import { useRouter } from 'next/navigation';
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
	return (
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
												onClick={() => router.push(`/admin/${item?.slug}`)}
												icon={item?.icon_name && AppIcons[item?.icon_name]}
											>
												<p>{item.name}</p>
											</Sidebar.Item>
										))}
									</Sidebar.ItemGroup>
								</>
							) : (
								<Sidebar.Item
									key={sidebar.name}
									onClick={() => router.push(`${sidebar?.link}`)}
									icon={AppIcons[sidebar?.icon_name]}
								>
									<p>{sidebar.name}</p>
								</Sidebar.Item>
							)}
						</>
					))}
				</Sidebar.ItemGroup>
			</Sidebar.Items>
			<SidebarBottomSettings show={true} items={bottomSide} drawer={'Sidebar Navigation'} />
		</Sidebar>
	);
};

export default SidebarNav;

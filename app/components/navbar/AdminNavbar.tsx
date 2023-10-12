'use client';
import useMainDrawer from '@/app/hooks/useMainDrawer';
import useSidebarDrawer from '@/app/hooks/useSidebarDrawer';
import { SafeUser } from '@/app/types';
import { Navbar } from 'flowbite-react';
import { useCallback, useEffect, useState } from 'react';
import LoginButton from '../LoginButton';
import ThemeToggle from '../ThemeToggle';
import IconComponent from '../icons/IconComponent';
import AvatarNav from './AvatarNav';
import Logo from './Logo';
import NavSearch from './NavSearch';
interface ContentData {
	id: string;
	name: string;
	slug: string;
	description: string;
	icon: string;
	active: boolean;
}
interface AdminNavbarProps {
	currentUser?: SafeUser | null;
	showSearch?: boolean;
}
const AdminNavbar: React.FC<AdminNavbarProps> = ({ currentUser, showSearch }) => {
	const mainDrawer = useMainDrawer();
	const sidebarDrawer = useSidebarDrawer();
	const [tabContent, setTabContent] = useState<ContentData[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	const [showDrawer, setShowDrawer] = useState(false);
	const tabData: ContentData[] = tabContent;
	useEffect(() => {
		setIsLoading(true);
		// Fetch the data from the API
		fetch('/api/category')
			.then((response) => response.json())
			.then((data) => setTabContent(data))

			.catch((error) => console.error('Error fetching sections:', error))
			.finally(() => setIsLoading(false));
	}, [setTabContent]);

	const toggle = useCallback(() => {
		if (!sidebarDrawer.isOpen) {
			sidebarDrawer.onOpen();
		} else {
			sidebarDrawer.onClose();
		}
	}, [sidebarDrawer]);
	return (
		<>
			<Navbar>
				<div className="flex md:order-0 gap-4 pr-2">
					<div
						onClick={toggle}
						className="p-2 mr-2 cursor-pointer hover:text-gray-50 dark:focus:bg-gray-700 dark:focus:ring-gray-700 dark:text-gray-400 dark:hover:text-white"
					>
						<span className="sr-only">Toggle sidebar</span>
						<p>
							<IconComponent iconName="sidebar" />
						</p>
					</div>
					<Navbar.Brand href="/dashboard" className="gap-4 pl-2  w-[120px] md:w-[280px]">
						<Logo color={'white'} onClick={() => {}} height={120} width={120} />
					</Navbar.Brand>
					{showSearch && <NavSearch />}
				</div>

				<div className="flex md:order-2 gap-4 pr-2">
					{/* {tabData && currentUser && (
						<>
							<Notification currentUser={currentUser} />

							<Dropdown
								className="overflow-hidden z-40 w-[320px] py-0 rounded-xl justify-start z-101 my-4 max-w-sm text-base list-none bg-white divide-y divide-gray-100 shadow-lg dark:divide-gray-700 dark:bg-gray-800"
								placement="bottom"
								inline
								label={<IconComponent size={26} iconName={'apps'} />}
								arrowIcon={false}
							>
								<Tabs.Group aria-label="Default tabs" style="underline">
									{tabData.map((tab) => {
										tab.active = false;
										if (tab.slug === 'administration') {
											tab.active = true;
											tab.name = 'Admin';
										}
										return (
											<Tabs.Item
												key={tab.id}
												active={tab.active}
												icon={AppIcons[tab.icon]}
												title={tab.name}
												className="rounded-0"
											>
												{tab.name === 'Admin' && (
													<>
														<div className="grid grid-cols-3 py-1 px-2 text-center bg-white w-[320px]">
															<AddItem
																title="Servers"
																iconName="server"
																iconSize={24}
																fontSize={18}
																inline={false}
															/>
															<AddItem
																title="Databases"
																iconName="database"
																iconSize={24}
																fontSize={18}
																inline={false}
															/>
															<AddItem
																title="Integrations"
																iconName="integration"
																iconSize={24}
																fontSize={18}
																inline={false}
															/>
															<AddItem
																title="Users"
																iconName="users"
																iconSize={24}
																fontSize={18}
																inline={false}
															/>
															<AddItem
																title="Settings"
																iconName="gears"
																iconSize={24}
																fontSize={18}
																inline={false}
															/>
														</div>
													</>
												)}
												{tab.name === 'Applications' && (
													<>
														<div className="grid grid-cols-3 py-1 px-2 text-center bg-white w-[320px]">
															<AddItem
																title="Accounting"
																iconName="accounting"
																iconSize={24}
																fontSize={18}
																inline={false}
															/>
															<AddItem
																title="PoS"
																iconName="pos"
																iconSize={24}
																fontSize={18}
																inline={false}
															/>
															<AddItem
																title="Sales"
																iconName="sales"
																iconSize={24}
																fontSize={18}
																inline={false}
															/>
														</div>
													</>
												)}
												{tab.name === 'Tools' && (
													<>
														<div className="grid grid-cols-3 py-1 px-2 text-center max-w-[600px] md:max-w-[1024px] lg:max-w-[1280px] xl:max-w-[1920px] bg-white w-[320px] ">
															<AddItem
																title="Add Icon"
																iconName="icons"
																iconSize={24}
																fontSize={18}
																inline={false}
															/>
															<AddItem
																title="Add Block"
																iconName="addBlock"
																iconSize={24}
																fontSize={18}
																inline={false}
															/>
														</div>
													</>
												)}
											</Tabs.Item>
										);
									})}
								</Tabs.Group>
							</Dropdown>
						</>
					)} */}
					<ThemeToggle />
					{currentUser ? (
						<AvatarNav
							currentUser={currentUser}
							width={30}
							height={30}
							image={currentUser.image ? currentUser.image : '/images/placeholder.jpg'}
						/>
					) : (
						<LoginButton />
					)}
				</div>
			</Navbar>
		</>
	);
};

export default AdminNavbar;

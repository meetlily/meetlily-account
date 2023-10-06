'use client';
import useAccountModal from '@/app/hooks/useAccountModal';
import { SafeUser } from '@/app/types';
import { Badge, Dropdown, Navbar, Tabs } from 'flowbite-react';
import { signOut } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { FaInfo, FaUser } from 'react-icons/fa6';
import AvatarNav from '../AvatarNav';
import LoginButton from '../LoginButton';
import AppIcons from '../icons/AppIcons';
import IconComponent from '../icons/IconComponent';
import Logo from './Logo';
import NavSearch from './NavSearch';
import AddItem from './apps/AddItem';
import Notification from './notification/Notification';
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
	const accountModal = useAccountModal();

	const [tabContent, setTabContent] = useState<ContentData[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	const tabData: ContentData[] = tabContent;
	useEffect(() => {
		setIsLoading(true);
		// Fetch the data from the API
		fetch('/api/category')
			.then((response) => response.json())
			.then((data) => setTabContent(data))

			.catch((error) => console.error('Error fetching sections:', error))
			.finally(() => setIsLoading(false));
	}, []);

	return (
		<>
			<header className="fixed w-screen left-0 top-0 z-30">
				<div className="bg-gray-800 flex flex-col items-center">
					<Navbar fluid className="max-w-[2500px] w-full bg-gray-800 p-0">
						<div className="flex md:order-0 gap-4 pr-2">
							<Navbar.Brand href="/dashboard" className="gap-4 pl-2  w-[120px] md:w-[280px]">
								<Logo color={'white'} onClick={() => {}} height={120} width={120} />
							</Navbar.Brand>
							{showSearch && <NavSearch />}
						</div>

						<div className="flex md:order-2 gap-4 pr-2">
							{tabData && currentUser && (
								<>
									<Notification currentUser={currentUser} />

									<Dropdown
										className="overflow-hidden z-40 w-[320px] py-0 rounded-xl justify-start z-101 my-4 max-w-sm text-base list-none bg-white divide-y divide-gray-100 shadow-lg dark:divide-gray-700 dark:bg-gray-800"
										placement="bottom"
										inline
										label={<IconComponent size={26} iconName={'apps'} color={'white'} />}
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
							)}
							{currentUser && (
								<>
									<Dropdown
										placement="bottom"
										inline
										arrowIcon={false}
										className=" w-[280px] mt-4 navProfileDropdown rounded-b-md"
										label={
											<AvatarNav
												currentUser={currentUser}
												width={30}
												height={30}
												image={currentUser?.image ? currentUser?.image : '/images/placeholder.jpg'}
											/>
										}
									>
										<Dropdown.Header className=" bg-gray-800 py-4 px-10 -mt-1 text-center rounded-t-md  border-t border-gray-400 text-white">
											<AvatarNav
												currentUser={currentUser}
												width={30}
												height={30}
												image={currentUser?.image ? currentUser?.image : '/images/placeholder.jpg'}
											/>
											<div className="text-sm mt-2">{currentUser?.name}</div>

											<div className="truncate text-sm font-medium">{currentUser?.email}</div>
											{currentUser?.Role[0] &&
												currentUser?.Role[0].name === 'Super Administrator' && (
													<Badge className="absolute top-3 -right-3 rounded-full rotate-45">
														<p>Super Admin</p>
													</Badge>
												)}
										</Dropdown.Header>
										<div className="relative z-40 bg-white rounded-b-md">
											<Dropdown.Item href={'/admin/account'} icon={FaUser} className="py-3">
												Account
											</Dropdown.Item>
											<Dropdown.Item
												href={'/modules/documentation'}
												icon={AppIcons['documentation']}
												className="py-3"
											>
												Documentation
											</Dropdown.Item>
											<Dropdown.Item icon={AppIcons['support']} className="py-3">
												Support
											</Dropdown.Item>
											<Dropdown.Item icon={FaInfo} className="py-3">
												About Meetlily
											</Dropdown.Item>
											<Dropdown.Item
												onClick={signOut}
												icon={AppIcons['signOut']}
												className="py-3 font-semibold border-t transition rounded-b-md"
											>
												Sign out
											</Dropdown.Item>
										</div>
									</Dropdown>
								</>
							)}
							{!currentUser && (
								<>
									<LoginButton />
								</>
							)}
						</div>
					</Navbar>
				</div>
			</header>
		</>
	);
};

export default AdminNavbar;

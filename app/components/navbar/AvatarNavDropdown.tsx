'use client';

'use client';
import { SafeUser } from '@/app/types';
import { Badge, Dropdown, FlowbitePositions } from 'flowbite-react';
import { signOut } from 'next-auth/react';
import AppIcons from '../icons/AppIcons';
import AvatarNav from './AvatarNav';

interface AvatarNavDropdownProps {
	rounded?: boolean;
	classNames?: string;
	bordered?: boolean;
	img?: string;
	alt?: string;
	stacked?: boolean;
	content?: React.ReactElement | undefined;
	status?: 'away' | 'busy' | 'offline' | 'online' | undefined; // online, busy, offline, away
	statPosition?: keyof FlowbitePositions | undefined; // <empty> for top-left, top-right, bottom-left, bottom-right
	currentUser: SafeUser;
}
const AvatarNavDropdown: React.FC<AvatarNavDropdownProps> = ({
	rounded,
	classNames,
	bordered,
	img,
	alt,
	stacked,
	content: ContentText,
	status,
	statPosition,
	currentUser
}) => {
	return (
		<>
			<Dropdown
				placement="bottom"
				inline
				arrowIcon={false}
				className="w-[280px] -mt-1 navProfileDropdown"
				label={
					<AvatarNav
						currentUser={currentUser}
						width={30}
						height={30}
						image={currentUser?.image ? currentUser?.image : '/images/placeholder.jpg'}
					/>
				}
			>
				<Dropdown.Header className=" bg-gray-900 py-4 px-10 text-center text-white">
					<AvatarNav
						currentUser={currentUser}
						width={30}
						height={30}
						image={currentUser?.image ? currentUser?.image : '/images/placeholder.jpg'}
					/>
					<div className="text-sm mt-2">{currentUser?.name}</div>
					<div className="truncate text-sm font-medium">{currentUser?.email}</div>
					{currentUser?.Role &&
						currentUser?.Role[0] &&
						currentUser?.Role[0].name === 'Super Administrator' && (
							<Badge className="absolute top-3 -right-3 rounded-full rotate-45">
								<p>Super Admin</p>
							</Badge>
						)}
				</Dropdown.Header>
				<div className="relative z-40 bg-white">
					<Dropdown.Item href={'/admin/account'} icon={AppIcons['account']} className="py-3">
						Account
					</Dropdown.Item>
					<Dropdown.Item href={'/dashboard'} icon={AppIcons['dashboard']} className="py-3">
						Dashboard
					</Dropdown.Item>
					<Dropdown.Item
						href={'/modules/documentation'}
						icon={AppIcons['documentation']}
						className="py-3"
					>
						Documentation
					</Dropdown.Item>
					{/* <Dropdown.Item icon={AppIcons['support']} className="py-3">
						About
					</Dropdown.Item> */}
					<Dropdown.Item
						onClick={signOut}
						icon={AppIcons['signOut']}
						className="py-3 font-semibold border-t transition"
					>
						Sign out
					</Dropdown.Item>
				</div>
			</Dropdown>
		</>
	);
};

export default AvatarNavDropdown;

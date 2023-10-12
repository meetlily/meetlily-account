'use client';

import useMainDrawer from '@/app/hooks/useMainDrawer';
import useSidebarDrawer from '@/app/hooks/useSidebarDrawer';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import ButtonIcon from '../ButtonIcon';
interface SidebarBottomSettingsProps {
	show: boolean;
	items?: any | null;
	drawer?: string;
}
const SidebarBottomSettings: React.FC<SidebarBottomSettingsProps> = ({ show, items, drawer }) => {
	const router = useRouter();
	const mainDrawer = useMainDrawer();
	const sidebarDrawer = useSidebarDrawer();
	const handleClick = (item: any) => {
		console.log(item.target, 'handleClick');
		if (item.target.innerText === 'Close') {
			console.log(sidebarDrawer.isOpen);
			if (sidebarDrawer.isOpen || mainDrawer.isOpen) {
				sidebarDrawer.onClose();
				mainDrawer.onClose();
			}
		} else if (item.target.innerText === 'Logout') {
			signOut().then((res) => {
				router.push('/sign-in');
			});
		} else if (item.target.innerText === 'Docs') {
			router.push('/admin/documentation');
		}
	};
	return (
		<>
			<div className="absolute bottom-0 left-0 flex-col justify-center w-full lg:flex z-20">
				<div className="p-2">{/* <SidebarCTA show={true} /> */}</div>
				<div className="flex flex-col border-t items-center justify-center bg-gray-50 dark:border-gray-700 dark:bg-gray-800">
					<div className="w-full flex flex-row items-center justify-center gap-2 space-x-4 py-2">
						{items?.map((item: any) => (
							<>
								<ButtonIcon
									label={item.name}
									icon={item?.icon_name}
									size={'text-md'}
									iconSize={20}
									showLabel={true}
									drawer={drawer}
									inline
									onClick={handleClick}
								/>
							</>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default SidebarBottomSettings;

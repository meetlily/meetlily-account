'use client';

import useMainDrawer from '@/app/hooks/useMainDrawer';
import useModuleOptionDrawer from '@/app/hooks/useModuleOptionDrawer';
import useSidebarDrawer from '@/app/hooks/useSidebarDrawer';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { useCallback, useEffect } from 'react';
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
	const moduleDrawer = useModuleOptionDrawer();
	useEffect(() => {
		NProgress.done();

		return () => {
			NProgress.start();
		};
	}, []);
	const handleClickDrawer = useCallback(
		(item: any) => {
			if (item.name === 'Close') {
				if (item.drawer === 'main-drawer') {
					mainDrawer.onClose();
				} else if (item.drawer === 'sidebar-drawer') {
					sidebarDrawer.onClose();
				} else if (item.drawer === 'module-drawer') {
					moduleDrawer.onClose();
				}
			} else if (item.name === 'Logout') {
				NProgress.start();
				signOut().then((res) => {
					router.push('/sign-in');
				});
			} else if (item.name === 'Docs') {
				NProgress.start();
				router.push('/documentation');
			}
		},
		[sidebarDrawer, mainDrawer, router, moduleDrawer]
	);

	return (
		<>
			<div className="absolute bottom-0 left-0 flex-col justify-center w-full lg:flex z-20">
				<div className="p-2">{/* <SidebarCTA show={true} /> */}</div>
				<div className="flex flex-col border-t items-center justify-center bg-gray-50 dark:border-gray-700 dark:bg-gray-800">
					<div className="w-full flex flex-row items-center justify-center gap-2 space-x-4 py-2">
						{items?.map((item: any) => (
							<>
								<ButtonIcon
									key={item.name}
									label={item.name}
									icon={item?.icon_name}
									size={'text-md'}
									iconSize={20}
									showLabel={true}
									drawer={drawer}
									inline
									onClick={() => handleClickDrawer(item)}
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

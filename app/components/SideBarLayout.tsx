'use client';
import sidebar from '@/data/sidebar.json';
import { Sidebar } from 'flowbite-react';
import { useState } from 'react';

interface SideBarLayoutProps {
	showSidebar?: boolean;
	width?: string;
	classNames?: string;
	color?: string;
	id?: string;
	ariaLabel?: string;
	children?: React.ReactNode;
}
const SideBarLayout: React.FC<SideBarLayoutProps> = ({
	showSidebar,
	width,
	classNames,
	color,
	id,
	ariaLabel,
	children
}) => {
	const [isDrawerOpen, setIsDrawerOpen] = useState(true);
	const toggleDrawer = () => {
		setIsDrawerOpen(!isDrawerOpen);
	};
	return (
		<>
			<Sidebar id={id} aria-label={ariaLabel} className={classNames} color={color}>
				<Sidebar.Items className={classNames}>
					<>
						{sidebar.map((side, i) => (
							<>
								<Sidebar.ItemGroup key={i}></Sidebar.ItemGroup>
							</>
						))}
					</>
				</Sidebar.Items>
			</Sidebar>
		</>
	);
};

export default SideBarLayout;

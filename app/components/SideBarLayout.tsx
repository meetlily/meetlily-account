'use client';
import sidebar from '@/data/sidebar.json';
import { Sidebar } from 'flowbite-react';
import { useState } from 'react';
import SidebarCTA from './sidebar/SidebarCTA';
import SidebarItem from './sidebar/SidebarItem';

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
			<Sidebar id={id} aria-label={ariaLabel} className="border-r" color={color}>
				<Sidebar.Items>
					<>
						{sidebar.map((side, i) => (
							<>
								<Sidebar.ItemGroup key={i}>
									{side.group === 'cta' && <SidebarCTA show={true} />}
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
			</Sidebar>
		</>
	);
};

export default SideBarLayout;

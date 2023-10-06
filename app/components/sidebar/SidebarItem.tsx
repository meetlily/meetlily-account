'use client';

import { Sidebar } from 'flowbite-react';
import AppIcons from '../icons/AppIcons';
interface SidebarItemProps {
	label: string;
	iconName: string;
	subItems?: any;
	href?: string | null;
	classNames?: string;
	group?: string;
}
const SidebarItem: React.FC<SidebarItemProps> = ({
	label,
	iconName,
	subItems,
	href,
	group,
	classNames
}) => {
	return (
		<>
			{!subItems && (
				<>
					<Sidebar.Item href={href} icon={iconName && AppIcons[iconName]}>
						<p>{label}</p>
					</Sidebar.Item>
				</>
			)}
			{subItems && typeof subItems === 'object' && (
				<>
					<Sidebar.Collapse icon={AppIcons[iconName]} label={label}>
						{subItems.map((item: any) => (
							<Sidebar.Item
								key={item.slug}
								href={item.external ? item.external : `/${group}/${item?.slug}`}
								icon={item?.icon_name && AppIcons[item?.icon_name]}
							>
								<p>{item.name}</p>
							</Sidebar.Item>
						))}
					</Sidebar.Collapse>
				</>
			)}
		</>
	);
};

export default SidebarItem;

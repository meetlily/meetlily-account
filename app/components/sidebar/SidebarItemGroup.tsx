'use client';
import { Sidebar } from 'flowbite-react';
interface SidebarItemGroupProps {
	classNames?: string;
	divider?: boolean;
	children?: React.ReactNode | null;
	id?: string;
	group?: string;
	items?: string[];
}
const SidebarItemGroup: React.FC<SidebarItemGroupProps> = ({
	classNames,
	divider,
	children,
	id,
	group,
	items
}) => {
	return <Sidebar.ItemGroup>{children}</Sidebar.ItemGroup>;
};

export default SidebarItemGroup;

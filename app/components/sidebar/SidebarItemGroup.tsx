'use client';

interface SidebarItemGroupProps {
	classNames?: string;
	divider?: boolean;
	children?: React.ReactNode | null;
	id?: string;
	sidebarGroupData?: string[] | null;
}
const SidebarItemGroup: React.FC<SidebarItemGroupProps> = ({
	classNames,
	divider,
	children,
	id,
	sidebarGroupData
}) => {
	console.log(sidebarGroupData);
	return (
		<>
			{children}

			{sidebarGroupData?.map((group: any) => {
				<div>item</div>;
			})}
		</>
	);
};

export default SidebarItemGroup;

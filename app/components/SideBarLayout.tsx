'use client';

import { Sidebar } from 'flowbite-react';
import DrawerButton from './drawers/DrawerButton';
import ProductForm from './forms/ProductForm';
import DrawerContent from './drawers/DrawerContent';

interface SideBarLayoutProps {
	showSidebar: boolean;
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
	

	return (
		<>
			{showSidebar && (
				<>
					<Sidebar id={id} aria-label={ariaLabel} className={classNames} color={color}>
						{children}
						<DrawerButton buttonId={'drawer-new-product-button'} drawerTargetId={"drawer-new-product"} label={"New Product"} />
					</Sidebar>
					
				</>
			)}
		</>
	);
};

export default SideBarLayout;

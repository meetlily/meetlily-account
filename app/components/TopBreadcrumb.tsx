'use client';

import { Breadcrumb } from 'flowbite-react';
import { useParams, usePathname } from 'next/navigation';
import AppIcons from './icons/AppIcons';
interface TopBreadcrumbProps {}
const TopBreadcrumb: React.FC<TopBreadcrumbProps> = ({}) => {
	const params = useParams();
	const pathName = usePathname();
	const paths = pathName?.split('/');

	paths?.map((path, i) => {
		if (i === 0 && path === '') {
			paths[i] = 'dashboard';
		} else if (i === 1 && path === 'dashboard') {
			paths.splice(i);
		} else {
		}
	});
	return (
		<Breadcrumb aria-label="breadcrumb" className="capitalize py-2">
			{paths?.map((path, i) => (
				<>
					{pathName !== path && (
						<Breadcrumb.Item
							href={`/${i === 2 ? `${paths[1]}/${paths[2]}` : `${path}`}`}
							icon={AppIcons[`${path}`]}
						>
							<p>{path}</p>
						</Breadcrumb.Item>
					)}
				</>
			))}
		</Breadcrumb>
	);
};

export default TopBreadcrumb;

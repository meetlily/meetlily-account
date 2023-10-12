'use client';

import { Badge, Sidebar } from 'flowbite-react';
import Link from 'next/link';
import { useCallback, useState } from 'react';
import AppIcons from '../icons/AppIcons';
import IconComponent from '../icons/IconComponent';
interface SidebarCTAProps {
	show: boolean;
	content?: React.ReactElement;
	color?: string;
	badge?: boolean;
	badgeLabel?: string;
	badgeColor?: string;
}
const SidebarCTA: React.FC<SidebarCTAProps> = ({
	show,
	content,
	badge,
	badgeLabel,
	badgeColor,
	color
}) => {
	const [isCtaHidden, setCtaHidden] = useState(show);
	const toggleCta = useCallback(() => {
		if (!isCtaHidden) {
			setCtaHidden(true);
		} else {
			setCtaHidden(false);
		}
	}, [isCtaHidden]);
	return (
		<>
			<Sidebar.CTA
				color="failure"
				className={`${isCtaHidden ? 'block' : 'hidden'} border border-gray-200 mb-2 mt-2`}
			>
				<div className="mb-0 flex items-center">
					<Badge color="failure">Under Development</Badge>
					<button
						onClick={() => toggleCta()}
						aria-label="Close"
						className="-m-1.5 ml-auto inline-flex h-6 w-6 rounded-lg  p-1 text-cyan-900 hover:bg-gray-200 focus:ring-2 focus:ring-gray-400 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600"
						type="button"
					>
						<IconComponent customIcon={AppIcons['close']} />
					</button>
				</div>
				<div className="mb-3 text-sm text-cyan-900 dark:text-gray-400 ">
					<p>
						Meetlily applications are currently under heavy development. This is a just preview of
						the new upcoming dashboard!
					</p>
				</div>
				<Link
					className="text-sm text-cyan-900 underline hover:text-cyan-800 dark:text-gray-400 dark:hover:text-gray-300"
					href="/"
				>
					<p>Navigate to the homepage</p>
				</Link>
			</Sidebar.CTA>
		</>
	);
};

export default SidebarCTA;

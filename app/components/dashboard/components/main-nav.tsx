'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Icons } from '@/app/components/dashboard/components/icons';

export function MainNav() {
	const pathname = usePathname();

	return (
		<div className="mr-4 hidden md:flex">
			<Link href="/" className="mr-6 flex items-center space-x-2">
				<Icons.logo className="w-[100px]" />
				{/* <span className="hidden font-bold sm:inline-block">
          {siteConfig.name}
        </span> */}
			</Link>
		</div>
	);
}

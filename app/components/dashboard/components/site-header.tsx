import Link from 'next/link';

import { cn } from '@/app/libs/utils';
import { siteConfig } from '@/config/site';
import { buttonVariants } from '@/registry/new-york/ui/button';
import { MainNav } from './main-nav';
import { MobileNav } from './mobile-nav';
import { ModeToggle } from './mode-toggle';

import IconComponent from './icons/IconComponent';

interface SiteHeaderProps {
	currentUser?: any;
}
export function SiteHeader({ currentUser }: SiteHeaderProps) {
	return (
		<header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="container flex h-10 items-center">
				<MainNav />
				<MobileNav />
				<div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
					<nav className="flex items-center">
						<Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
							<div
								className={cn(
									buttonVariants({
										variant: 'ghost'
									}),
									'w-9 px-0'
								)}
							>
								<IconComponent iconName="github" />
								<span className="sr-only">GitHub</span>
							</div>
						</Link>
						<Link href={siteConfig.links.facebook} target="_blank" rel="noreferrer">
							<div
								className={cn(
									buttonVariants({
										variant: 'ghost'
									}),
									'w-9 px-0'
								)}
							>
								<IconComponent iconName="facebook" />

								<span className="sr-only">Facebook</span>
							</div>
						</Link>
						<ModeToggle />
					</nav>
				</div>
			</div>
		</header>
	);
}

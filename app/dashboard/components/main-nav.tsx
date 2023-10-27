import Link from 'next/link';

import { cn } from '@/app/libs/utils';

export function MainNav({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
	return (
		<nav className={cn('flex items-center space-x-4 lg:space-x-6', className)} {...props}>
			<Link
				href="?tab=overview"
				className="text-sm font-medium transition-colors hover:text-primary"
			>
				Overview
			</Link>
			<Link
				href="/admin/users"
				className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
			>
				Users
			</Link>
			<Link
				href="/admin/organizations"
				className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
			>
				Organizations
			</Link>
			<Link
				href="/admin/modules"
				className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
			>
				Modules
			</Link>
		</nav>
	);
}

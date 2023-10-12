'use client';

import { Banner } from 'flowbite-react';
import { HiX } from 'react-icons/hi';
import { MdAnnouncement } from 'react-icons/md';

export default function DefaultStickyBanner() {
	return (
		<Banner>
			<div className="fixed top-0 left-0 z-50 flex justify-between w-full p-4 border-b border-gray-200 bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
				<div className="flex items-center mx-auto">
					<p className="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
						<MdAnnouncement />
						<span>
							New brand identity has been launched for the{' '}
							<a
								href="https://flowbite.com"
								className="inline font-medium text-cyan-600 underline dark:text-cyan-500 underline-offset-2 decoration-600 dark:decoration-500 decoration-solid hover:no-underline"
							>
								Flowbite Library
							</a>
						</span>
					</p>
				</div>
				<Banner.CollapseButton color="gray" className="border-0 bg-transparent px-0">
					<HiX className="h-4 w-4" />
				</Banner.CollapseButton>
			</div>
		</Banner>
	);
}

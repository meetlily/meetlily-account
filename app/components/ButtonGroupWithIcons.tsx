'use client';

import { Button } from 'flowbite-react';
import { HiAdjustments, HiCloudDownload, HiUserCircle } from 'react-icons/hi';

export default function ButtonGroupWithIcons() {
	return (
		<Button.Group>
			<Button color="gray">
				<HiUserCircle className="mr-3 h-4 w-4" />
				<p>Profile</p>
			</Button>
			<Button color="gray">
				<HiAdjustments className="mr-3 h-4 w-4" />
				<p>Settings</p>
			</Button>
			<Button color="gray">
				<HiCloudDownload className="mr-3 h-4 w-4" />
				<p>Messages</p>
			</Button>
		</Button.Group>
	);
}

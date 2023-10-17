'use client';

import { Button } from 'flowbite-react';
import IconComponent from '../icons/IconComponent';

interface MoreInfoProps {
	message?: string;
	error?: any;
	module?: string;
	header?: string;
	primaryAction?: () => void;
	icon_name?: string;
}
const MoreInfo: React.FC<MoreInfoProps> = ({
	message,
	error,
	module,
	header,
	primaryAction,
	icon_name
}) => {
	if (!icon_name) {
		icon_name = 'ban';
	}
	return (
		<div
			id="toast-interactive"
			className="w-full max-w-md py-10 px-6 mx-auto mt-16 text-gray-500 bg-white rounded-lg shadow dark:bg-gray-800 dark:text-gray-400"
			role="alert"
		>
			<div className="flex">
				<div className="inline-flex items-start justify-start flex-shrink-0 text-gray-500  dark:text-red-30">
					<IconComponent iconName={icon_name} size={40} />
				</div>
				<div className="ml-3 text-sm font-normal">
					<span className="mb-3 text-sm font-semibold text-gray-500">
						<div className="uppercase">{header || 'Module is not installed.'}</div>
					</span>
					<div className="mb-4 mt-2 text-sm font-normal">
						{message || 'Would you like to install this module?'} .
					</div>
					<div className={`grid grid-cols-2 gap-2 ${primaryAction ? '' : 'hidden'}`}>
						<div>
							<Button
								onClick={primaryAction}
								className="font-bold inline-flex justify-center w-full px-2 py-1.5 text-xs text-center text-white bg-red-500 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-800"
							>
								Install
							</Button>
						</div>
						<div>
							<Button
								onClick={primaryAction}
								className="font-bold inline-flex justify-center w-full px-2 py-1.5 text-xs text-center text-white bg-gray-500 rounded-lg hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-800"
							>
								Not now
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MoreInfo;

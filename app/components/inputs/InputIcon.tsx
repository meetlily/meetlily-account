'use client';

import { Card, Dropdown } from 'flowbite-react';
import { useState } from 'react';
import AppIcons from '../icons/AppIcons';
import IconComponent from '../icons/IconComponent';

declare global {
	var cloudinary: any;
}

interface InputIconProps {
	onChange: (name: string, value: string) => void;
	value: string;
	helperText?: string;
	name: string;
	type: string;
	id: string;
	label: string;
}

const InputIcon: React.FC<InputIconProps> = ({
	onChange,
	value,
	helperText,
	name,
	type,
	id,
	label
}) => {
	const [iconValue, setIconValue] = useState<string>(value);
	const handleIconChange = (name: string, value: string) => {
		setIconValue(value);
		onChange(name, value);
	};
	const iconC = (
		<>
			<div className="flex flex-row items-center justify-start gap-4 ">
				{value && <IconComponent iconName={iconValue} size={36} class_name="w-[60px]" />}

				<div
					className="
						relative
						cursor-pointer
						hover:opacity-70
						transition
						border-dashed
						border-2
						px-10
						py-4
						border-neutral-300
						flex
						flex-row
						justify-center
						items-center
						gap-4
						text-gray-500 dark:text-gray-200
					"
				>
					<IconComponent iconName="icons" />
					<div className="font-semibold text-md ">Click to change the icon</div>
				</div>
			</div>
		</>
	);

	return (
		<>
			<Dropdown color="light" label={iconC} dismissOnClick={true} placement="top">
				<div className="w-full h-[300px] p-4 overflow-auto">
					<div className="grid grid-cols-8 gap-2 items-center justify-center">
						{Object.keys(AppIcons).map((icon) => (
							<Card
								key={icon}
								className="rounded-md hover:cursor-pointer hover:bg-gray-200"
								onClick={() => handleIconChange(name, icon)}
							>
								<div className="flex flex-col items-center justify-center w-full overflow-hidden">
									<IconComponent iconName={icon} size={26} />
									<div className="text-[8px] text-center">{icon}</div>
								</div>
							</Card>
						))}
					</div>
				</div>
			</Dropdown>
		</>
	);
};

export default InputIcon;

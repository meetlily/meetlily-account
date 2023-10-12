'use client';
import { SafeUser } from '@/app/types';
import { Dropdown } from 'flowbite-react';
import ButtonIcon from '../ButtonIcon';

interface ModuleShowDropDownButtonProps {
	currentUser?: SafeUser | null;
	header?: React.ReactNode;
	body?: React.ReactNode;
}
const ModuleShowDropDownButton: React.FC<ModuleShowDropDownButtonProps> = ({
	currentUser,
	header,
	body
}) => {
	return (
		<>
			<Dropdown
				id="module-options-dropdown"
				className="overflow-hidden py-0 rounded-xl justify-start z-50 max-w-sm text-base list-none divide-y divide-gray-100 shadow-lg dark:divide-gray-600 dark:bg-gray-700"
				placement="bottom"
				inline
				label={
					<ButtonIcon
						onClick={() => {}}
						label="Manage"
						icon="moduleOptions"
						size={'text-sm'}
						iconSize={20}
						color={'gray'}
						outline
						showLabel={false}
						rounded
						shadow
						inline
						classNames="h-8 w-8"
					/>
				}
				arrowIcon={false}
			>
				<Dropdown.Header className="block py-2 px-4 text-base font-medium text-center  dark:bg-gray-600 dark:text-gray-300">
					Configure module
				</Dropdown.Header>
				<div>
					<Dropdown.Item className="flex justify-start py-3 px-4 border-b text-left bg-white hover:bg-gray-50 dark:hover:bg-gray-600 dark:border-gray-600">
						<ButtonIcon icon={'addForm'} showLabel inline label={'Create Formfield'} />
					</Dropdown.Item>
					<Dropdown.Item className="flex justify-start py-3 px-4 border-b text-left bg-white hover:bg-gray-50 dark:hover:bg-gray-600 dark:border-gray-600">
						<ButtonIcon icon={'updateForm'} showLabel inline label={'Update Formfield'} />
					</Dropdown.Item>
					<Dropdown.Divider />
					<Dropdown.Item className="flex justify-start py-3 px-4 border-b text-left bg-white hover:bg-gray-50 dark:hover:bg-gray-600 dark:border-gray-600">
						<ButtonIcon icon={'appSettings'} showLabel inline label={'Configure Module'} />
					</Dropdown.Item>
				</div>
			</Dropdown>
		</>
	);
};

export default ModuleShowDropDownButton;

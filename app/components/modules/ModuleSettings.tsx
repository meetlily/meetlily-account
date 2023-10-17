'use client';

import { Accordion } from 'flowbite-react';
import { useRouter } from 'next/navigation';
import ButtonIcon from '../ButtonIcon';
import DatabaseConfiguration from './form/DatabaseConfiguration';
import ModuleForm from './form/ModuleForm';

interface ModuleSettingsProps {
	label?: string;
	slug?: string;
	installed?: boolean;
	values?: any;
	fields?: any;
}

const ModuleSettings: React.FC<ModuleSettingsProps> = ({
	label,
	slug,
	installed,
	fields,
	values
}) => {
	const router = useRouter();

	return (
		<div
			className={`flex flex-col item-center justify-center rounded-none overflow-auto`}
			role="group"
		>
			<Accordion>
				<Accordion.Panel>
					<Accordion.Title>
						<ButtonIcon icon={'module'} label="Module Configuration" showLabel inline />
					</Accordion.Title>
					<Accordion.Content>
						<ModuleForm />
					</Accordion.Content>
				</Accordion.Panel>
				<Accordion.Panel>
					<Accordion.Title>
						<ButtonIcon icon={'database'} label="Database Configuration" showLabel inline />
					</Accordion.Title>
					<Accordion.Content>
						<DatabaseConfiguration />
					</Accordion.Content>
				</Accordion.Panel>
				<Accordion.Panel>
					<Accordion.Title>
						<ButtonIcon icon={'layout'} label="Layout Configuration" showLabel inline />
					</Accordion.Title>
					<Accordion.Content>{}</Accordion.Content>
				</Accordion.Panel>
			</Accordion>
		</div>
	);
};

export default ModuleSettings;

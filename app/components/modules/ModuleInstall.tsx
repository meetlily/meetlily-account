'use client';

import { Card } from 'flowbite-react';
import { useParams } from 'next/navigation';
import Heading from '../Heading';

interface ModuleInstallProps {
	modules: any;
}

const ModuleInstall: React.FC<ModuleInstallProps> = ({ modules }) => {
	const params = useParams();
	const foundLocalModule = modules.find((item: any) => item.slug === params?.slug);
	return (
		<>
			<Heading title={'Module Install'} size={'text-lg'} />
			<Card className="w-1/2 mx-auto">
				<Heading title={foundLocalModule.name} size={'text-sm'} />
			</Card>
		</>
	);
};

export default ModuleInstall;

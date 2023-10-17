'use client';

import useInstallModuleModal from '@/app/hooks/useInstallModuleModal';
import useModuleOptionDrawer from '@/app/hooks/useModuleOptionDrawer';
import { SafeUser } from '@/app/types';
import { LocalModule } from '@/app/types/module';
import { Formfield, Module } from '@prisma/client';
import { JsonValue } from '@prisma/client/runtime/library';
import { Card } from 'flowbite-react';
import ButtonGroup from 'flowbite-react/lib/esm/components/Button/ButtonGroup';
import { useParams, usePathname, useRouter } from 'next/navigation';
import ButtonIcon from '../../ButtonIcon';
import Heading from '../../Heading';
import InstallModuleModal from '../../modals/InstallModuleModal';
import AdminModuleUsers from './AdminModuleUsers';

interface FormData {
	[fieldName: string]: string | number;
}
interface SafeFormFields {
	id: string;
	name: string;
	label: string;
	default: boolean | null;
	fields: JsonValue;
	moduleId: string | null;
	organizationId: string | null;
}

interface AdminModuleProps {
	installed?: Module[];
	fields?: Formfield[];
	modules?: LocalModule[];
	users?: any[];
	currentUser?: SafeUser | null;
	organization?: any;
}

const AdminModule: React.FC<AdminModuleProps> = ({
	installed,
	fields,
	modules,
	users,
	currentUser,
	organization
}) => {
	const router = useRouter();
	const params = useParams();
	const pathName = usePathname();
	const moduleOptionDrawer = useModuleOptionDrawer();
	const installModuleModal = useInstallModuleModal();
	//console.log(params, 'params');
	const paths = pathName?.split('/');
	if (params?.slug) {
		const foundModule = currentUser?.Module?.find((item: any) => item.slug === params?.slug);
		const foundLocalModule = modules?.find((item: any) => item.slug === params?.slug);

		if (params?.slug === 'user') {
			return <AdminModuleUsers currentUser={currentUser} modules={modules} users={users} />;
		}
		//console.log(foundLocalModule, foundModule);
		if (!foundModule) {
			return (
				<>
					<div className="flex flex-col items-center justify-center">
						<Card className="mt-10 p-6 w-1/4 mx-auto rounded-lg">
							<h2 className="text-lg my-4">
								Would you like to install{' '}
								<span className="capitalize">{foundLocalModule?.name}</span> module?
							</h2>
							<ButtonGroup className="gap-4">
								<ButtonIcon
									icon="install"
									iconSize={26}
									size="text-lg"
									showLabel
									label="Install"
									inline
									outline
									rounded
									pill
									shadow
									onClick={installModuleModal.onOpen}
									classNames="bg-red-500 text-white hover:bg-red-600 px-6 py-4"
								/>
								<ButtonIcon
									icon="close"
									iconSize={26}
									size="text-lg"
									showLabel
									label="Cancel"
									inline
									rounded
									outline
									shadow
									onClick={() => router.back()}
									classNames="bg-gray-50 text-black px-6 py-4"
								/>
							</ButtonGroup>
						</Card>
					</div>

					<InstallModuleModal module={foundLocalModule} />
				</>
			);
		}
	}

	const foundMe = paths?.find((item: string) => item === 'me');

	return (
		<>
			<div className="flex flex-col w-full">
				<Heading title={`${foundMe ? 'My ' : ''}${params?.slug || ''}`} showOptionButton />
			</div>
		</>
	);
};

export default AdminModule;

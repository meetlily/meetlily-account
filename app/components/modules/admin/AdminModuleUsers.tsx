'use client';

import useDeleteModal from '@/app/hooks/useDeleteModal';
import useInstallModuleModal from '@/app/hooks/useInstallModuleModal';
import useModuleOptionDrawer from '@/app/hooks/useModuleOptionDrawer';
import { SafeUser } from '@/app/types';
import { LocalModule } from '@/app/types/module';
import { Formfield, Module } from '@prisma/client';
import { JsonValue } from '@prisma/client/runtime/library';
import axios from 'axios';
import { useParams, usePathname, useRouter } from 'next/navigation';
import { useCallback, useState } from 'react';
import toast from 'react-hot-toast';
import Heading from '../../Heading';
import DeleteModal from '../../modals/DeleteModal';
import TableLists from '../views/TableLists';
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

interface AdminModuleUsersProps {
	installed?: Module[];
	fields?: Formfield[];
	modules?: LocalModule[];
	users?: any[];
	currentUser?: SafeUser | null;
	organization?: any;
}

const AdminModuleUsers: React.FC<AdminModuleUsersProps> = ({
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
	const [data, setData] = useState<any>({});
	const deleteModal = useDeleteModal();

	const moduleView = {
		id: null,
		name: null,
		email: null
	};
	const paths = pathName?.split('/');
	const primaryActionClick = useCallback((item: any) => {
		setData(item);
	}, []);
	const secondaryActionClick = useCallback(
		(item: any) => {
			setData(item);
			deleteModal.onOpen();
		},
		[deleteModal]
	);
	const deleteModalActionClick = useCallback(
		(item: any) => {
			axios
				.delete(`/api/users/${item.id}`)
				.then(() => {
					toast.success(`${item.name} successfully deleted!`);
					router.refresh();
				})
				.catch((err) => {
					toast.error(`Error deleting ${item.name}!`);
				});
		},
		[router]
	);
	if (params?.slug) {
		const foundModule = currentUser?.Module?.find((item: any) => item.slug === params?.slug);
		const foundLocalModule = modules?.find((item: any) => item.slug === params?.slug);

		const foundMe = paths?.find((item: string) => item === 'me');

		return (
			<>
				<div className="flex flex-col w-full">
					<Heading title={`${foundMe ? 'My ' : ''}${params?.slug || ''}`} showOptionButton />
				</div>
				{/* <div className="flex flex-col md:flex-row h-full w-full  gap-4 ">
					<Card className="flex w-full"></Card>
					<Card className="flex w-full"></Card>
					<Card className="flex w-full"></Card>
				</div> */}
				<div className="flex flex-col h-full w-full  gap-4 ">
					<TableLists
						moduleView={moduleView}
						fields={users}
						primaryAction={primaryActionClick}
						secondaryAction={secondaryActionClick}
					/>
				</div>
				<DeleteModal
					data={data}
					isOpen={deleteModal.isOpen}
					deleteAction={deleteModalActionClick}
				/>
			</>
		);
	}
};

export default AdminModuleUsers;

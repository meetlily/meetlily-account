'use client';

import useInstallModuleModal from '@/app/hooks/useInstallModuleModal';
import { SafeUser } from '@/app/types';
import { LocalModule } from '@/app/types/module';
import { Formfield, Module } from '@prisma/client';
import { JsonValue } from '@prisma/client/runtime/library';
import axios from 'axios';
import { useParams, usePathname } from 'next/navigation';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { useEffect, useState } from 'react';
import AdminModuleLists from './AdminModuleLists';

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
	dbModules?: any;
	rapid?: any;
}

const AdminModule: React.FC<AdminModuleProps> = ({
	installed,
	fields,
	modules,
	users,
	currentUser,
	organization,
	dbModules,
	rapid
}) => {
	const params = useParams();
	const [data, setData] = useState<any>();

	const installModuleModal = useInstallModuleModal();
	const pathName = usePathname();
	const paths = pathName?.split('/');
	const endpoint = `/api/${params?.slug}`;
	useEffect(() => {
		axios
			.get(endpoint)
			.then((response) => {
				setData(response.data);
			})
			.catch((err) => err);
		NProgress.done();
		return () => {
			NProgress.start();
		};
	}, [endpoint]);

	if (!params?.slug) {
		return null;
	}

	const foundModule = currentUser?.Module?.find((item: any) => item.slug === params?.slug);
	const foundMe = paths?.find((item: string) => item === 'me');

	// if (!data) {
	// 	return <ModuleInstall modules={modules} />;
	// }

	return <>{data && <AdminModuleLists loadData={data} />}</>;
};

export default AdminModule;

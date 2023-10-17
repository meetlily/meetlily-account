'use client';

import useLoader from '@/app/hooks/useLoader';
import { SafeUser } from '@/app/types';
import { LocalModule } from '@/app/types/module';
import { Formfield, Module } from '@prisma/client';
import { JsonValue } from '@prisma/client/runtime/library';
import { useParams, useRouter } from 'next/navigation';
import Heading from '../../Heading';

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

interface AccountModuleProps {
	installed?: Module[];
	fields?: Formfield[];
	modules?: LocalModule[];
	users?: any[];
	currentUser?: SafeUser | null;
	organization?: any;
}

const AccountModule: React.FC<AccountModuleProps> = ({
	installed,
	fields,
	modules,
	users,
	currentUser,
	organization
}) => {
	const router = useRouter();
	const params = useParams();
	const loader = useLoader();
	if (!params) {
		return null;
	}

	return (
		<>
			<div className="flex flex-col w-full">
				<Heading title={params?.slug || ''} showOptionButton />
			</div>
		</>
	);
};

export default AccountModule;

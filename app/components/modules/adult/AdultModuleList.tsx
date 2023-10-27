'use client';

import useDeleteModal from '@/app/hooks/useDeleteModal';
import useModuleListModal from '@/app/hooks/useModuleListModal';
import useModuleOptionDrawer from '@/app/hooks/useModuleOptionDrawer';
import { SafeUser } from '@/app/types';
import { LocalModule } from '@/app/types/module';
import { Formfield, Module } from '@prisma/client';
import { JsonValue } from '@prisma/client/runtime/library';
import axios from 'axios';
import { Card } from 'flowbite-react';
import { useParams, usePathname, useRouter } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import Heading from '../../Heading';
import { refactorDataToFields } from '../../inputs/InputComponent';
import ModuleListModal from '../../modals/ModuleListModal';
import AdultBox from './AdultBox';
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

interface AdultModuleListsProps {
	installed?: Module[];
	fields?: Formfield[];
	modules?: LocalModule[];
	users?: any[];
	currentUser?: SafeUser | null;
	organization?: any;
	rapid?: any;
}

const AdultModuleLists: React.FC<AdultModuleListsProps> = ({
	installed,
	fields,
	modules,
	users,
	currentUser,
	organization,
	rapid
}) => {
	const router = useRouter();
	const params = useParams();
	const pathName = usePathname();
	const moduleOptionDrawer = useModuleOptionDrawer();
	const moduleListModal = useModuleListModal();
	const [data, setData] = useState<any[]>([]);
	const [dataItem, setDataItem] = useState<any>();
	const [defaultField, setDefaultField] = useState<any>({});
	const [moduleView, setModuleView] = useState<any>({});
	const deleteModal = useDeleteModal();

	const paths = pathName?.split('/');
	useEffect(() => {
		axios
			.get('/api/adult?query=blowjob&page=1&timeout=5000')
			.then((response) => {
				setData(response.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);
	console.log(data);
	const primaryActionClick = useCallback(
		(item: any) => {
			if (typeof item === 'object') {
				setData(refactorDataToFields(item));
			} else {
				console.log(defaultField, 'defaultField');
				const rfi = refactorDataToFields(defaultField);
				console.log(rfi, 'rfi');
				setData(rfi);
			}

			moduleListModal.onOpen();
		},
		[moduleListModal, defaultField]
	);
	const handleClick = (item: any) => {
		console.log(item);
		setDataItem(item);
		moduleListModal.onOpen();
	};
	const secondaryActionClick = useCallback(
		(item: any) => {
			setData(item);
			deleteModal.onOpen();
		},
		[deleteModal]
	);
	//if (data) {
	return (
		<>
			<div className="flex flex-col w-full">
				<Heading
					title={`Adult`}
					showOptionButton
					showAddButton
					addButtonAction={primaryActionClick}
				/>
			</div>

			<div
				className="grid
						grid-cols-3
						md:grid-cols-4
						gap-4
						md:gap-5
						lg:gap-6
						xl:gap-7
						max-w-[600px]
						md:max-w-[1024px]
						lg:max-w-[1280px]
						xl:max-w-[1920px]
						2xl:max-w-[2500px]"
			>
				{data.map((item: any) => (
					<>
						<AdultBox onClick={handleClick} item={item} />
					</>
				))}
			</div>
			<ModuleListModal data={dataItem}>
				{dataItem.links.map((link: any) => (
					<>
						<Card imgSrc={link.url}></Card>
					</>
				))}
			</ModuleListModal>
		</>
	);
	//}
};

export default AdultModuleLists;

'use client';

import useDeleteModal from '@/app/hooks/useDeleteModal';
import useModuleListModal from '@/app/hooks/useModuleListModal';
import useModuleOptionDrawer from '@/app/hooks/useModuleOptionDrawer';
import { JsonValue } from '@prisma/client/runtime/library';
import axios from 'axios';
import { Table } from 'flowbite-react';
import { useParams, usePathname, useRouter, useSearchParams } from 'next/navigation';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { useCallback, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import ButtonIcon from '../../ButtonIcon';
import ModuleListModal from '../../modals/ModuleListModal';
import TableHead from '../views/TableHead';
import TableRow from '../views/TableRow';
import AdminHeading from './AdminHeading';
import AdminModuleFields from './AdminModuleFields';
interface FormData {
	[fieldName: string]: string | number | boolean;
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

interface AdminModuleListsProps {
	loadData: any;
}

const AdminModuleLists: React.FC<AdminModuleListsProps> = ({ loadData }) => {
	const router = useRouter();
	const params = useParams();
	const pathName = usePathname();
	const searchParams = useSearchParams();
	const moduleOptionDrawer = useModuleOptionDrawer();
	const moduleListModal = useModuleListModal();
	const [data, setData] = useState<any[]>([]);
	const [itemData, setItemData] = useState<FormData>();
	const [defaultField, setDefaultField] = useState<any>({});
	const [moduleView, setModuleView] = useState<any[]>([]);
	const deleteModal = useDeleteModal();

	useEffect(() => {
		setData(loadData[`${params?.slug}`]);
		setDefaultField(loadData.fields);
		setModuleView(loadData.keys);
		NProgress.done();
		return () => {
			NProgress.start();
		};
	}, [loadData, params]);
	const paths = pathName?.split('/');

	const primaryActionClick = useCallback(
		(item: any) => {
			if (item && typeof item === 'object') {
				setItemData(item);
			} else {
				setItemData({});
			}
			moduleListModal.onOpen();
		},
		[moduleListModal]
	);
	const secondaryActionClick = useCallback(
		(item: any) => {
			setData(item);
			deleteModal.onOpen();
		},
		[deleteModal]
	);
	const handleOnChange = (name: string, value: any) => {
		setItemData((prevData) => ({
			...prevData,
			[name]: value
		}));
	};
	const handleUpdate = (item: FormData) => {
		NProgress.start();
		if (itemData && itemData.id) {
			// if (Array.isArray(item.Module)) {
			// 	item.Module.map((m: any, i: number) => {
			// 		if (!item.Module[i].settings) {
			// 			item.Module[i].settings = {};
			// 		}
			// 	});
			// }
			axios
				.put(`/api/${params?.slug}/${itemData.id}`, itemData)
				.then((response) => {
					toast.success('Updated!');
					router.refresh();
					NProgress.done();
					moduleListModal.onClose();
				})
				.catch((err) => {
					console.log(err);
					toast.error('Error sending data');
					NProgress.done();
				});
		} else {
			axios
				.post(`/api/${params?.slug}`, itemData)
				.then((response) => {
					toast.success('Added!');
					router.refresh();
					NProgress.done();
					moduleListModal.onClose();
				})
				.catch((err) => {
					console.log(err);
					toast.error('Error adding data');
					NProgress.done();
				});
		}
	};
	const deleteModalActionClick = useCallback(
		(item: any) => {
			axios
				.delete(`/api/${params?.slug}/${item.id}`)
				.then(() => {
					toast.success(`${item.name} successfully deleted!`);
					router.refresh();
					deleteModal.onClose();
				})
				.catch((err) => {
					toast.error(`Error deleting ${item.name}!`);
				});
		},
		[router, params, deleteModal]
	);

	const footerAction = (
		<>
			<div
				className={`flex flex-row z-50 gap-4
					`}
			>
				<ButtonIcon
					label={'Submit'}
					onClick={(itemData) => handleUpdate(itemData)}
					classNames="px-4 py-2 bg-gray-300 text-gray-800 dark:hover:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
					size="sm"
					showLabel
					inline
					rounded
					shadow
					iconSize={24}
					icon={'signIn'}
				/>
				<ButtonIcon
					label={'Cancel'}
					onClick={moduleListModal.onClose}
					classNames="px-4 py-2 text-gray-800 bg-white  dark:hover:border-gray-700 dark:bg-gray-600 dark:text-gray-200"
					size="sm"
					showLabel
					inline
					shadow
					shadow-lg
					rounded
					iconSize={24}
					icon={'close'}
				/>
			</div>
		</>
	);
	if (params?.slug) {
		//const foundModule = currentUser?.Module?.find((item: any) => item.slug === params?.slug);
		//const foundLocalModule = modules?.find((item: any) => item.slug === params?.slug);

		const foundMe = paths?.find((item: string) => item === 'me');

		return (
			<>
				<AdminHeading
					title={`${foundMe ? 'My ' : ''}${params?.slug || ''}`}
					showOptionButton
					showAddButton
					addButtonAction={primaryActionClick}
				/>
				<div className="flex flex-col h-full w-full  gap-4 ">
					<Table>
						{moduleView && <TableHead moduleView={moduleView} />}

						<Table.Body className="divide-y">
							{data &&
								data.map((item: any) => (
									<TableRow
										key={item.id}
										item={item}
										field={defaultField}
										moduleView={moduleView}
										primaryAction={primaryActionClick}
										secondaryAction={secondaryActionClick}
									/>
								))}
						</Table.Body>
					</Table>
				</div>
				{/* <DeleteModal
					data={data}
					isOpen={deleteModal.isOpen}
					deleteAction={deleteModalActionClick}
				/> */}
				{
					<ModuleListModal footer={footerAction} label={`Add ${params.slug}`}>
						<div>
							{defaultField && itemData && (
								<AdminModuleFields
									fields={defaultField}
									values={itemData}
									onSubmitData={() => {}}
									onClose={() => {}}
									onChange={handleOnChange}
								/>
							)}
						</div>
					</ModuleListModal>
				}
			</>
		);
	}
};

export default AdminModuleLists;

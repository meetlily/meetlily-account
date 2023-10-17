'use client';

import useDeleteModal from '@/app/hooks/useDeleteModal';
import useFormModal from '@/app/hooks/useFormModal';
import useModuleOptionDrawer from '@/app/hooks/useModuleOptionDrawer';
import { ModuleType, OrganizationType, SafeUser } from '@/app/types';
import { LocalModule } from '@/app/types/module';
import { Formfield, Module } from '@prisma/client';
import { JsonValue } from '@prisma/client/runtime/library';
import axios from 'axios';
import { Card } from 'flowbite-react';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import Heading from '../Heading';

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

interface ModuleShowProps {
	installed?: Module[];
	fields: Formfield[];
	modules?: LocalModule[];
	users?: any[];
	currentUser?: SafeUser | null;
	organization?: any;
}

const ModuleShow: React.FC<ModuleShowProps> = ({
	installed,
	fields,
	modules,
	users,
	currentUser,
	organization
}) => {
	const router = useRouter();
	const params = useParams();
	const searchParams = useSearchParams();
	const formModal = useFormModal();
	const deleteModal = useDeleteModal();
	const moduleOptionDrawer = useModuleOptionDrawer();
	const [currentOrg, setCurrentOrg] = useState({});
	const [formModalHeader, setFormModalHeader] = useState('');
	const [formModalBody, setFormModalBody] = useState<React.ReactNode>(<></>);
	const [formModalId, setFormModalId] = useState('');
	const [formModalSize, setFormModalSize] = useState('xl');
	const [moduleObj, setModuleObj] = useState<LocalModule>();
	const [moduleInstalled, setModuleInstalled] = useState<ModuleType>();
	const [formFields, setformFields] = useState<SafeFormFields>();
	const [formFieldData, setFormFieldData] = useState<any>();
	const [moduleView, setModuleView] = useState<FormData>();
	const [currentFormFieldData, setcurrentFormFieldData] = useState({});
	const foundModule = installed?.find((mod) => mod.slug === params?.slug);
	const foundLocalModule = modules?.find((mod) => mod.slug === params?.slug);
	const foundFormFields = fields?.find((mod) => mod.name === params?.slug);
	const handleGetFormData = useCallback((e: any) => {
		return axios
			.get(`/api/formdata/formfieldId/${e?.id}`)
			.then((callback) => {
				return callback.data;
			})
			.then((res) => {
				return setFormFieldData(res);

				// setModuleView((prevData) => ({
				// 	...prevData,
				// 	[name]: value
				// }));
			});
	}, []);
	const handleGetFormField = useCallback(
		(e: any) => {
			return axios
				.get(`/api/formfield/${e?.id}`)
				.then((callback) => {
					return callback.data;
				})
				.then((res) => {
					const fi = res.fields;
					fi.map((f: any) => {
						const { name } = f;
						setModuleView((prevData) => ({
							...prevData,
							[name]: f
						}));
					});
					setformFields(res);
					return handleGetFormData(res);
				})
				.catch((err) => {
					toast.error('Error getting formfield');
				});
		},
		[setformFields, setModuleView, handleGetFormData]
	);

	useEffect(() => {
		setModuleObj(foundLocalModule);
		const nOrg: OrganizationType = organization;
		setCurrentOrg(nOrg);
		if (foundFormFields && foundFormFields.id) {
			handleGetFormField(foundFormFields);
		}
	}, [
		setCurrentOrg,
		setModuleObj,
		organization,
		handleGetFormField,
		foundLocalModule,
		foundFormFields
	]);
	const handleModalFormDataUpdate = useCallback(
		(e: any) => {
			e.data['id'] = e.id;
			setcurrentFormFieldData(e);
			setFormModalId(`modal-${e?.id}`);
			setTimeout(() => {
				setFormModalSize(`xl`);
				setFormModalHeader(`Update`);
				formModal.onOpen();
			}, 100);
		},
		[formModal, setFormModalId, setFormModalSize, setFormModalHeader, setcurrentFormFieldData]
	);
	const handleModalFormDataDelete = useCallback(
		(e: any) => {
			setcurrentFormFieldData({});
			axios
				.delete(`/api/formdata`, e)
				.then((callback) => {
					return callback.data;
				})
				.then((res) => {
					console.log(res);
					if (res.status === 500) {
						return null;
					}

					toast.success('Deleted!');
					deleteModal.onClose();
					router.refresh();
				})
				.catch((error) => {
					console.log(error);
					toast.error('Error deleting data!');
				});
		},
		[setcurrentFormFieldData, router, deleteModal]
	);
	const openModuleOptionsDrawer = useCallback(
		(item: any) => {
			if (moduleOptionDrawer.isOpen) {
				moduleOptionDrawer.onClose();
			} else {
				moduleOptionDrawer.onOpen();
			}
		},
		[moduleOptionDrawer]
	);
	const handleClickInstall = () => {
		router.push(`/admin/${params?.slug}/install`);
	};

	const handleConfirmDelete = useCallback(
		(e: any) => {
			setcurrentFormFieldData(e);
			deleteModal.onOpen();
		},
		[deleteModal]
	);
	const handleDeleteAction = useCallback(
		(e: any) => {
			handleModalFormDataDelete(e);
		},
		[handleModalFormDataDelete]
	);
	const handleCreate = useCallback(
		(e: any) => {
			const d = {
				data: {},
				formfieldId: foundFormFields?.id,
				moduleId: foundFormFields?.moduleId,
				organizationId: foundFormFields?.organizationId
			};
			e = d;
			setcurrentFormFieldData(e);
			setFormModalId(`create-modal-${params?.slug}`);
			setTimeout(() => {
				setFormModalSize(`xl`);
				setFormModalHeader(`Create ${params?.slug}`);
				formModal.onOpen();
			}, 100);
		},
		[
			formModal,
			setFormModalId,
			setFormModalSize,
			setFormModalHeader,
			setcurrentFormFieldData,
			foundFormFields,
			params
		]
	);

	const handleManage = () => {
		setcurrentFormFieldData({});
		formModal.onOpen();
		setFormModalId(`handle-modal-${params?.slug}`);
		setFormModalSize(`2xl`);
		setFormModalHeader(`Configure ${params?.slug}`);
	};

	// if (params?.slug === 'coding') {
	// 	return <CodeEditorWithFileTree />;
	// }
	// if (params?.slug === 'terminal') {
	// 	return <TerminalPage params={params} />;
	// }

	console.log(moduleObj);
	return (
		<>
			<div className="flex flex-col ">
				<Heading title={moduleObj?.name || ''} iconName={`${moduleObj?.icon_name || 'add'}`} />
				{/* <div className="flex flex-col items-start justify-start w-full"></div>
				<div className="flex flex-row gap-2 items-end justify-end w-full">
					<ButtonIcon
						onClick={() => handleCreate(currentFormFieldData)}
						label="Create"
						icon={'add'}
						size={'text-sm'}
						iconSize={20}
						color={'gray'}
						rounded
						inline
						showLabel={false}
						outline
						shadow
						classNames="h-8 w-8"
					/>
					<ButtonIcon
						onClick={() => openModuleOptionsDrawer(currentFormFieldData)}
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

				</div> */}
			</div>
			<div className="flex flex-col mt-4 w-full">
				{foundLocalModule && (
					<Card>Test</Card>

					// <Card color={`${foundFormFields ? 'warning' : ''}`}>
					// 	{params?.slug === 'module' ? (
					// 		<ModulesTable />
					// 	) : (
					// 		<Table className={`${foundFormFields ? '' : 'hidden'}`}>
					// 			<Table.Head>
					// 				<Table.HeadCell className="w-[200px]">id</Table.HeadCell>
					// 				{moduleView &&
					// 					Object.keys(moduleView).map((list) => (
					// 						<Table.HeadCell key={list}>
					// 							{list && <span className="list">{list}</span>}
					// 						</Table.HeadCell>
					// 					))}
					// 				<Table.HeadCell></Table.HeadCell>
					// 			</Table.Head>
					// 			<Table.Body className="divide-y">
					// 				{formFieldData?.map((d: any) => (
					// 					<Table.Row
					// 						key={d.id}
					// 						className="bg-white dark:border-gray-700 dark:bg-gray-800"
					// 					>
					// 						<Table.Cell>{d.id}</Table.Cell>
					// 						{moduleView &&
					// 							Object.keys(moduleView).map((list) => (
					// 								<Table.Cell key={list}>{d.data[list]}</Table.Cell>
					// 							))}

					// 						<Table.Cell>
					// 							<div className="flex flex-row items-end justify-end gap-2">
					// 								<ButtonIcon
					// 									onClick={() => handleModalFormDataUpdate(d)}
					// 									label="Update"
					// 									icon="edit"
					// 									size={'text-sm'}
					// 									iconSize={22}
					// 									color={'gray'}
					// 									inline
					// 									disabled
					// 									data={d}
					// 								/>
					// 								<ButtonIcon
					// 									onClick={() => handleConfirmDelete(d)}
					// 									label="Delete"
					// 									icon="close"
					// 									size={'text-sm'}
					// 									iconSize={22}
					// 									color={'red'}
					// 									inline
					// 									disabled
					// 									data={d}
					// 								/>
					// 							</div>
					// 						</Table.Cell>
					// 					</Table.Row>
					// 				))}
					// 			</Table.Body>
					// 		</Table>
					// 	)}
					// </Card>
				)}
			</div>
			{/* <FormModal
				id={formModalId}
				size={'3xl'}
				fields={formFields}
				values={currentFormFieldData}
				isOpen={formModal.isOpen}
				header={formModalHeader}
				body={<FormRenderFields fields={formFields} values={currentFormFieldData} />}
			/>
			<DeleteModal
				id="delete-modal-confirmation"
				isOpen={deleteModal.isOpen}
				data={currentFormFieldData}
				deleteAction={() => handleDeleteAction(currentFormFieldData)}
			/>
			<DrawerContent
				id={'module-option-drawer-content'}
				isOpen={moduleOptionDrawer.isOpen}
				onClose={moduleOptionDrawer.onClose}
				xPosition="right"
				yPosition="top"
				width={'w-[360px]'}
				body={<ModuleSettings fields={formFields} values={currentFormFieldData} />}
				footer={
					<SidebarBottomSettings
						show={true}
						items={bottomSideNav.module}
						drawer={'module-drawer'}
					/>
				}
				overlay
			/> */}
		</>
	);
};

export default ModuleShow;

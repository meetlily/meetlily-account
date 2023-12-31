'use  client';
import useFlowNodeConfig from '@/app/hooks/useFlowNodeConfig';
import useFormModal from '@/app/hooks/useFormModal';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { ActionMeta, SingleValue } from 'react-select';
import ButtonComponent from '../../Button';
import AppIcons from '../../icons/AppIcons';
import InputSelect from '../../inputs/InputSelect';
import InputText from '../../inputs/InputText';
interface FormData {
	[fieldName: string]: string | number;
}
interface FormRenderFieldsProps {
	fields: any;
	values?: any;
	fixed?: boolean;
	type?: string;
	module?: any;
	showActionButton?: boolean;
}
const FormRenderFields: React.FC<FormRenderFieldsProps> = ({
	fields,
	values,
	type,
	module,
	fixed,
	showActionButton
}) => {
	// const foundData = formData?.find(
	// 	(d: { formfieldId: string | undefined }) => d.formfieldId === fields?.id
	// );

	const vData: FormData = values;
	const router = useRouter();
	const [isLoading, setIsLoading] = useState(false);
	const [formData, setFormData] = useState<FormData>(vData);
	const [formField, setFormField] = useState(fields);
	const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string>('');
	const formModal = useFormModal();
	const nodeConfig = useFlowNodeConfig();
	const handleSelectChange = (
		newValue: SingleValue<string | number>,
		actionMeta: ActionMeta<string | number>
	) => {
		console.log(newValue, actionMeta);
		// const { name, value } = e.target;
		// if (name === 'paymentMethod') {
		// 	setSelectedPaymentMethod(e.target.value);
		// 	setFormData((prevData) => ({
		// 		...prevData,
		// 		[name]: value
		// 	}));
		// } else {
		// 	setFormData((prevData) => ({
		// 		...prevData,
		// 		[name]: value
		// 	}));
		// }
	};
	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value
		}));
		if (!formModal.data.data) {
			formModal.data.data = {
				[name]: value
			};
		}
	};
	const handleToggleChange = (checked: boolean, name: any) => {
		setFormData((prevData) => ({
			...prevData,
			[name]: checked
		}));
	};
	const {
		register,
		reset,
		handleSubmit,
		setValue,
		formState: { errors }
	} = useForm<FieldValues>({
		defaultValues: vData
	});
	const onSubmit: SubmitHandler<FieldValues> = (d) => {
		let endpoint = '/api/formdata';
		if (type && type === 'module_config') {
			endpoint = `/api/configuration`;
		}
		if (!values.id) {
			const data = {
				data: d,
				formfieldId: formField.id,
				moduleId: formField.moduleId,
				organizationId: formField.organizationId
			};
			return axios
				.post(`${endpoint}`, data)
				.then((callback) => {
					return callback.data;
				})
				.then((res) => {
					toast.success('Success!');
					router.refresh();
					reset();
					setTimeout(() => {
						formModal.onClose();
					}, 100);
				})
				.catch((error) => {
					toast.error('Error submitting form!');
				});
		} else {
			const data = {
				id: values.id,
				data: d,
				formfieldId: formField.id,
				moduleId: formField.moduleId,
				organizationId: formField.organizationId
			};
			return axios
				.put(`${endpoint}`, data)
				.then((callback) => {
					return callback.data;
				})
				.then((res) => {
					console.log(res);
					toast.success('Updated!');
					reset();
					router.refresh();
					setTimeout(() => {
						formModal.onClose();
					}, 100);
				})
				.catch((error) => {
					toast.error('Error submitting form!');
				});
		}
	};
	const setCustomValue = (id: string, value: any) => {
		setFormData((prevData) => ({
			...prevData,
			[id]: value
		}));
		setValue(id, value, { shouldValidate: true, shouldDirty: true, shouldTouch: true });
	};
	return (
		<>
			<div className="flex flex-col w-full h-full items-start justify-start min-h-[200px] pt-4 pb-4">
				{fields?.map((field: any, i: any) => (
					<div
						key={i}
						className="px-4 mb-4 flex flex-col md:flex-row items-center justify-start w-full"
					>
						<label
							hidden={field.type === 'hidden'}
							htmlFor={field.name}
							className={`${
								field.type === 'hidden'
									? 'hidden'
									: 'flex flex-col text-sm w-full max-w-[80px] text-gray-800 dark:text-gray-50'
							}`}
						>
							{field.label}
						</label>
						<div className="flex flex-col w-full">
							{field.type === 'select' ? (
								<InputSelect
									value={field.value}
									onChange={(value) => setCustomValue(field.name, value)}
								/>
							) : (
								<>
									{field.type === 'toggle' ? (
										<InputText
											type={field.type}
											id={field.name}
											name={field.name}
											placeholder={field.placeholder}
											register={register}
											value={formData[field.name] || field.value}
											errors={errors}
											onChange={handleInputChange}
										/>
									) : (
										<InputText
											type={field.type}
											id={field.name}
											disabled={isLoading}
											required={field.required}
											register={register}
											errors={errors}
											value={formData[field.name] || field.value}
											placeholder={field.placeholder}
											onChange={handleInputChange}
											name={field.name}
										/>
									)}
								</>
							)}
						</div>
					</div>
				))}
				<div
					className={`${
						fixed
							? 'relative'
							: 'absolute bottom-0 left-0 right-0 px-6 py-2 bg-white border-gray-200 border-t dark:bg-gray-700 dark:border-gray-600'
					} z-50   gap-4 mt-2 
					${showActionButton ? 'flex flex-row' : 'hidden'}
					`}
				>
					<ButtonComponent
						isProcessing={isLoading}
						label={'Continue'}
						onClick={handleSubmit(onSubmit)}
						classNames="px-4 pl-2"
						color="dark"
						size="sm"
						icon={AppIcons['signIn']}
						iconSize={24}
					/>
					<ButtonComponent
						label={'Cancel'}
						onClick={nodeConfig.onClose}
						classNames="px-4 pl-2 bg-gray-50 text-gray-600"
						color="gray"
						size="sm"
						icon={AppIcons['close']}
						iconSize={24}
					/>
				</div>
			</div>
		</>
	);
};
export default FormRenderFields;

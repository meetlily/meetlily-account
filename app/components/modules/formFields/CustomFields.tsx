'use  client';
import useFlowNodeConfig from '@/app/hooks/useFlowNodeConfig';
import useFormModal from '@/app/hooks/useFormModal';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import ButtonIcon from '../../ButtonIcon';
//import AccountSelect from '../../inputs/AccountSelect';
import CountrySelect, { CountrySelectValue } from '../../inputs/CountrySelect';
import ImageUpload from '../../inputs/ImageUpload';
import InputDate from '../../inputs/InputDate';
import InputIcon from '../../inputs/InputIcon';
import InputSelect, { SelectValue } from '../../inputs/InputSelect';
import InputText from '../../inputs/InputText';
import InputToggleSwitch from '../../inputs/InputToggleSwitch';

interface FormData {
	[fieldName: string]: string | number | boolean;
}
interface CustomFieldsProps {
	fields: any;
	values?: any;
	fixed?: boolean;
	type?: string;
	module?: any;
	showActionButton?: boolean;
	onSubmitData: (d: FormData) => void;
	onClose: () => void;
	isNew?: boolean;
}
const CustomFields: React.FC<CustomFieldsProps> = ({
	fields,
	values,
	type,
	module,
	fixed,
	showActionButton,
	onSubmitData,
	onClose,
	isNew
}) => {
	const router = useRouter();
	const [isLoading, setIsLoading] = useState(false);
	const [formData, setFormData] = useState<FormData>(values);
	const [formField, setFormField] = useState<any[]>(fields);
	const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string>('');
	const formModal = useFormModal();
	const nodeConfig = useFlowNodeConfig();

	const handleInputChange = (name: string, v: any) => {
		const { value } = v.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value
		}));
	};
	const handleToggleChange = (checked: boolean, name: string) => {
		//const { name, value } = e.target;

		setFormData((prevData) => ({
			...prevData,
			[name]: checked
		}));
	};
	const handleIconChange = (name: string, value: string) => {
		setFormData((prevData) => ({
			...prevData,
			[name]: value
		}));
	};

	const {
		register,
		reset,
		handleSubmit,
		setValue,
		formState: { errors }
	} = useForm<FieldValues>({
		defaultValues: formData
	});
	const setCustomValue = (id: string, value: any) => {
		console.log(id, value);
		setFormData((prevData) => ({
			...prevData,
			[id]: value
		}));
		setValue(id, value, { shouldValidate: true, shouldDirty: true, shouldTouch: true });
	};
	const onSubmit: SubmitHandler<FieldValues> = (d) => {
		onSubmitData(formData);
	};

	return (
		<>
			{fields?.map((field: any, i: any) => (
				<>
					<div className="flex flex-col md:flex-row items-center gap-4 w-full ">
						<label
							htmlFor={field.name}
							className={`
								${field.type === 'hidden' ? 'uppercase' : 'capitalize'} 
								${field.name === 'Formdata' ? 'hidden' : ''} 
								${field.name === 'Formfield' ? 'hidden' : ''} 
								${field.name === 'hashedPassword' ? 'hidden' : ''} 
								text-gray-700  flex flex-col text-sm w-full max-w-[80px] my-2 dark:text-gray-50
						`}
						>
							{field.label}
						</label>
						{field.type === 'select' && (
							<>
								<div className="flex w-full my-2">
									<InputSelect
										value={(formData[field.name] as SelectValue) || ''}
										onChange={(value) => setCustomValue(field.name, value)}
										name={field.name}
										id={field.id}
									/>
								</div>
							</>
						)}
						{field.type === 'hidden' && (
							<>
								<div className="flex  w-full my-2">
									<div className="text-gray-500">{formData[field.name] || ''}</div>
									<InputText
										type={'hidden'}
										id={field.id}
										placeholder={field.placeholder}
										register={register}
										value={formData[field.id] || ''}
										errors={errors}
									/>
								</div>
							</>
						)}
						{field.type === 'date' && (
							<>
								<div className="flex  w-full my-2">
									<InputDate
										register={register}
										value={formData[field.id]}
										name={field.name}
										id={field.id}
										onChange={(value) => setCustomValue(field.id, value)}
										label={field.label}
										errors={errors}
									/>
								</div>
							</>
						)}
						{field.type === 'email' && (
							<>
								<div className="flex w-full my-2">
									<InputText
										type={field.type}
										id={field.id}
										placeholder={field.placeholder}
										register={register}
										value={formData[field.id] || ''}
										errors={errors}
										onChange={(value) => handleInputChange(field.id, value)}
									/>
								</div>
							</>
						)}
						{field.type === 'image' && (
							<div className="flex  w-full my-2">
								<ImageUpload onChange={() => {}} value={field.value} />
							</div>
						)}
						{field.type === 'countrySelect' && (
							<div className="flex  w-full my-2">
								<CountrySelect
									value={(field.value as CountrySelectValue) || ''}
									onChange={(value) => setCustomValue(field.id, value)}
									className="flex w-full"
								/>
							</div>
						)}
						{field.type === 'label' && <div className="flex  w-full my-2">{field.value}</div>}
						{field.type === 'locationSelect' && (
							<div className="flex  w-full my-2">
								<CountrySelect
									value={field.value}
									onChange={(value) => setCustomValue('location', value)}
									className="flex w-full"
								/>
							</div>
						)}
						{field.type === 'toggle' ||
							(field.type === 'checkbox' && (
								<div className="flex  w-full my-2">
									<InputToggleSwitch
										id={field.id}
										label={field.label}
										name={field.name}
										value={formData[field.id] || ''}
										register={register}
										errors={errors}
										onChange={handleToggleChange}
									/>
								</div>
							))}
						{field.type === 'text' && (
							<div className="flex  w-full my-2">
								<InputText
									type={field.type}
									id={field.id}
									placeholder={field.placeholder}
									register={register}
									value={formData[field.id] || ''}
									errors={errors}
									onChange={(value) => handleInputChange(field.id, value)}
								/>
							</div>
						)}
						{field.type === 'password' && (
							<div className="flex  w-full my-2">
								<InputText
									type={field.type}
									id={field.id}
									placeholder={field.placeholder}
									register={register}
									value={formData[field.id] || ''}
									errors={errors}
									onChange={(value) => handleInputChange(field.id, value)}
								/>
							</div>
						)}
						{field.type === 'icon' && (
							<div className="flex my-2">
								<InputIcon
									type={field.type}
									id={field.id}
									name={field.name}
									onChange={handleIconChange}
									label={field.label}
									value={field.value}
								/>
							</div>
						)}
						{field.type === 'textarea' && (
							<div className="flex  w-full my-2">
								<InputText
									type={'text'}
									id={field.id}
									placeholder={field.placeholder}
									register={register}
									value={formData[field.id] || ''}
									errors={errors}
									onChange={(value) => handleInputChange(field.id, value)}
								/>
							</div>
						)}
					</div>
				</>
			))}

			<div
				className={`${fixed ? 'relative' : ' px-6 py-1 rounded-b-lg'} z-50 my-4  gap-4
					${showActionButton ? 'flex flex-row' : 'hidden'}
					`}
			>
				<ButtonIcon
					label={'Submit'}
					onClick={handleSubmit(onSubmit)}
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
					onClick={onClose}
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
};
export default CustomFields;

'use  client';
import { useEffect, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
//import AccountSelect from '../../inputs/AccountSelect';
import { generateRandomString, sluggify } from '@/app/utils/utils';
import { Textarea } from 'flowbite-react';
import moment from 'moment';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import CountrySelect, { CountrySelectValue } from '../../inputs/CountrySelect';
import ImageUpload from '../../inputs/ImageUpload';
import { refactorDataToFields } from '../../inputs/InputComponent';
import InputDate from '../../inputs/InputDate';
import InputIcon from '../../inputs/InputIcon';
import InputSelect, { SelectValue } from '../../inputs/InputSelect';
import InputText from '../../inputs/InputText';
import InputToggleSwitch from '../../inputs/InputToggleSwitch';

interface FormData {
	[fieldName: string]: any;
}
interface AdminModuleFieldsProps {
	fields: any[];
	values?: any;
	onSubmitData: (d: FormData) => void;
	onChange: (name: string, v: any) => void;
	onClose: () => void;
	isNew?: boolean;
}
const AdminModuleFields: React.FC<AdminModuleFieldsProps> = ({
	fields,
	values,
	onSubmitData,
	onChange,
	onClose,
	isNew
}) => {
	const [formData, setFormData] = useState<FormData>({});
	const [formField, setFormField] = useState<any>([]);

	useEffect(() => {
		const nVal = {
			...values,
			createdAt: moment(values.createdAt).format('LLL'),
			updatedAt: moment(values.updatedAt).format('LLL')
		};
		setFormData(nVal);
		const mergeValFields = { ...values, ...fields };

		setFormField(refactorDataToFields(mergeValFields));
		NProgress.done();
		return () => {
			NProgress.start();
		};
	}, [fields, values]);
	console.log(formField, 'setFormField');
	const {
		register,
		reset,
		handleSubmit,
		setValue,
		formState: { errors }
	} = useForm<FieldValues>({
		defaultValues: formData
	});
	const handleInputChange = (name: string, v: any) => {
		const { value } = v.target;
		// setFormData((prevData) => ({
		// 	...prevData,
		// 	[name]: value
		// }));
		onChange(name, value);
	};
	const handleImageChange = (name: string, v: any) => {
		const { value } = v.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value
		}));
		onChange(name, value);
	};
	const handleToggleChange = (checked: boolean, name: string) => {
		//const { name, value } = e.target;

		setFormData((prevData) => ({
			...prevData,
			[name]: checked
		}));
		onChange(name, checked);
	};
	const handleIconChange = (name: string, value: string) => {
		setFormData((prevData) => ({
			...prevData,
			[name]: value
		}));
		onChange(name, value);
	};

	const setCustomValue = (id: string, value: any) => {
		setFormData((prevData) => ({
			...prevData,
			[id]: value
		}));
		setValue(id, value, { shouldValidate: true, shouldDirty: true, shouldTouch: true });
		onChange(id, value);
	};
	const onSubmit: SubmitHandler<FieldValues> = (d) => {
		onSubmitData(formData);
	};
	const formatSlug = (d: any) => {
		return d;
	};
	const options = {
		minimap: {
			enabled: false
		}
	};
	return (
		<>
			{formField &&
				formField.map((field: any, i: any) => (
					<>
						<div className="flex flex-col md:flex-row items-center gap-4 w-full ">
							<label
								htmlFor={field.name}
								className={`
								${field.type === 'hidden' ? 'capitalize' : 'capitalize'} 
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
											value={(formData[field.id] as SelectValue) || ''}
											onChange={(value) => setCustomValue(field.id, value)}
											id={field.id}
											name={field.id}
										/>
									</div>
								</>
							)}
							{field.type === 'hidden' && (
								<>
									<div className="flex  w-full my-2">
										<div className="text-gray-500 text-sm text-normal">
											{formData[field.id]
												? formData[field.id]
												: field.id === 'id'
												? generateRandomString(32)
												: ''}
										</div>
										<InputText
											type={'hidden'}
											id={field.id}
											placeholder={field.placeholder}
											register={register}
											value={
												formData[field.id]
													? formData[field.id]
													: field.id === 'id'
													? generateRandomString(32)
													: ''
											}
											errors={errors}
											//onChange={(value) => handleInputChange(field.id, value)}
										/>
									</div>
								</>
							)}
							{field.type === 'dateHidden' && (
								<>
									<div className="flex  w-full my-2">
										<div className="text-gray-500 text-sm text-normal">
											{formData[field.id] || moment().format('LLL')}
										</div>
										<InputText
											type={'hidden'}
											id={field.id}
											placeholder={field.placeholder}
											register={register}
											value={formData[field.id] || moment().format('LLL')}
											errors={errors}
											//onChange={(value) => handleInputChange(field.id, value)}
										/>
									</div>
								</>
							)}
							{field.type === 'slug' && (
								<>
									<div className="flex  w-full my-2">
										<div className="text-gray-500 text-sm text-normal">
											{sluggify(formData[field.id]) || ''}
										</div>
										<InputText
											type={'hidden'}
											id={field.id}
											placeholder={field.placeholder}
											register={register}
											value={sluggify(formData[field.id]) || ''}
											errors={errors}
											//onChange={(value) => handleInputChange(field.id, value)}
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

							{field.type === 'image' && (
								<div className="flex  w-full my-2">
									<ImageUpload
										onChange={(value) => handleImageChange(field.id, value)}
										value={formData[field.id] || ''}
									/>
								</div>
							)}
							{field.type === 'countrySelect' && (
								<div className="flex  w-full my-2">
									<CountrySelect
										value={(formData[field.id] as CountrySelectValue) || ''}
										onChange={(value) => setCustomValue(field.id, value)}
										className="flex w-full"
									/>
								</div>
							)}

							{field.type === 'locationSelect' && (
								<div className="flex  w-full my-2">
									<CountrySelect
										value={formData[field.id] as CountrySelectValue}
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
							{(field.type === 'text' || field.type === 'url' || field.type === 'email') && (
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
							{field.type === 'json' && (
								<div className="flex  w-full my-2">
									<Textarea id={field.id} onChange={(value) => handleInputChange(field.id, value)}>
										{formData[field.id] || ''}
									</Textarea>
									{/* <Editor
										language={field.type}
										defaultValue=""
										value={formData[field.id] || ''}
										options={EditorConfig}
										onChange={(value) => handleInputChange(field.id, value)}
										className="dark:bg-gray-900 w-full min-h-[20px] rounded-lg"
									/> */}
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
									<Textarea id={field.id} onChange={(value) => handleInputChange(field.id, value)}>
										{formData[field.id] || ''}
									</Textarea>
									{/* <InputText
										type={'text'}
										id={field.id}
										placeholder={field.placeholder}
										register={register}
										value={formData[field.id] || ''}
										errors={errors}
										onChange={(value) => handleInputChange(field.id, value)}
									/> */}
								</div>
							)}
						</div>
					</>
				))}
		</>
	);
};
export default AdminModuleFields;

'use  client';
import useFormModal from '@/app/hooks/useFormModal';
import axios from 'axios';
import { useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import ButtonComponent from '../../Button';
import AppIcons from '../../icons/AppIcons';
import InputSelect from '../../inputs/InputSelect';
import InputText from '../../inputs/InputText';
interface FormData {
	[fieldName: string]: string | number;
}
interface FormRenderFieldsProps {
	fields: any;
	values: any;
}
const FormRenderFields: React.FC<FormRenderFieldsProps> = ({ fields, values }) => {
	// const foundData = formData?.find(
	// 	(d: { formfieldId: string | undefined }) => d.formfieldId === fields?.id
	// );

	const [isLoading, setIsLoading] = useState(false);
	const [formData, setFormData] = useState<FormData>(values.data);
	const [formField, setFormField] = useState(fields);
	const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string>('');
	const formModal = useFormModal();

	const handleSelectChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
		const { name, value } = e.target;
		if (name === 'paymentMethod') {
			setSelectedPaymentMethod(e.target.value);
			setFormData((prevData) => ({
				...prevData,
				[name]: value
			}));
		} else {
			setFormData((prevData) => ({
				...prevData,
				[name]: value
			}));
		}
	};
	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
		const { name, value, type } = e.target;

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
		formState: { errors }
	} = useForm<FieldValues>({
		defaultValues: {}
	});
	const onSubmit: SubmitHandler<FieldValues> = (d) => {
		if (!values.id) {
			const data = {
				data: d,
				formfieldId: formField.id,
				moduleId: formField.moduleId,
				organizationId: formField.organizationId
			};
			return axios
				.post(`/api/formdata`, data)
				.then((callback) => {
					return callback.data;
				})
				.then((res) => {
					console.log(res);
					toast.success('Success!');
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
				.put(`/api/formdata`, data)
				.then((callback) => {
					return callback.data;
				})
				.then((res) => {
					console.log(res);
					toast.success('Updated!');
					reset();
					setTimeout(() => {
						formModal.onClose();
					}, 100);
				})
				.catch((error) => {
					toast.error('Error submitting form!');
				});
		}
	};
	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)}>
				{fields?.fields?.map((field: any, i: any) => (
					<div key={i} className="flex flex-col md:flex-row w-full items-center mb-4">
						<label htmlFor={field.name} className="text-sm text-gray-800 dark:text-gray-50 w-1/2">
							{field.label}
						</label>
						<div className="w-full">
							{field.type === 'select' ? (
								<InputSelect
									id={field.name}
									label={field.label}
									name={field.name}
									options={field.options}
									register={register}
									value={formData[field.name] || ''}
									errors={errors}
									required={field.required}
									onChange={handleSelectChange}
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
											value={formData[field.name] || ''}
											errors={errors}
											onChange={handleInputChange}
											onToggle={handleToggleChange}
										/>
									) : (
										<InputText
											type={field.type}
											id={field.name}
											name={field.name}
											placeholder={field.placeholder}
											required={field.required}
											value={formData[field.name] || ''}
											register={register}
											errors={errors}
											onChange={handleInputChange}
										/>
									)}
								</>
							)}
						</div>
					</div>
					// <RenderField field={field} data={formData} key={i} onSubmit={onSubmit} />
					// <div className="w-full" key={group.label}>
					// 	<Heading title={group.label} size="font-normal text-lg pb-2" />
					// 	<div className="flex flex-col items-center justify-center gap-4">
					// 		<>
					// 			{group?.fields?.map((field: JsonValue | JsonObject | JsonArray, i: any) => (

					// 			))}
					// 		</>
					// 	</div>
					// </div>
				))}
				<div className="flex flex-row gap-4">
					<ButtonComponent
						isProcessing={isLoading}
						label={'Continue'}
						onClick={handleSubmit(onSubmit)}
						classNames="w-full px-4 pl-2"
						color="dark"
						size="sm"
						icon={AppIcons['signIn']}
						iconSize={24}
					/>
					<ButtonComponent
						label={'Cancel'}
						onClick={formModal.onClose}
						classNames="w-full px-4 pl-2 text-gray-600"
						color="gray"
						size="sm"
						icon={AppIcons['close']}
						iconSize={24}
					/>
				</div>
			</form>
		</>
	);
};
export default FormRenderFields;

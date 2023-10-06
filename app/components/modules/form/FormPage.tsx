import { FormField, FormFieldGroup } from '@/app/types';
import { useParams, useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import ButtonComponent from '../../Button';
import Heading from '../../Heading';
import AppIcons from '../../icons/AppIcons';
import InputSelect from '../../inputs/InputSelect';
import InputText from '../../inputs/InputText';

interface FormData {
	[fieldName: string]: string | number;
}
interface SelectData {
	[fieldName: string]: string | number;
}
interface FormPageProps {
	data: FormFieldGroup[] | null;
}

const FormPage: React.FC<FormPageProps> = ({ data }) => {
	const [formData, setFormData] = useState<FormData>({});
	const [selectData, setSelectData] = useState<SelectData>({});
	const [isLoading, setIsLoading] = useState(false);
	const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string>('');
	const [selectedToggleSwitch, setSelectedToggleSwitch] = useState(false);
	const router = useRouter();
	const params = useParams();
	const slug = params?.slug;
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
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value
		}));
	};
	const handleToggleChange = (checked: boolean) => {
		setSelectedToggleSwitch(checked);
	};
	const {
		register,
		reset,
		handleSubmit,
		formState: { errors }
	} = useForm<FieldValues>({
		defaultValues: {}
	});
	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		console.log(data);
	};
	const renderFields = (fields: FormField[]) => {
		return fields.map((field) => {
			if (
				field.displayCondition &&
				field.displayCondition.toLowerCase() !== selectedPaymentMethod.toLowerCase()
			) {
				// Skip rendering if the displayCondition doesn't match the selected payment method
				return null;
			}
			// if(field.type === 'select'){
			//     return (

			//     )
			// }
			return (
				<div key={field.name} className="flex flex-col md:flex-row items-center justify-start">
					<label htmlFor={field.name} className="font-light text-sm w-full md:min-w-sm">
						{field.label}
					</label>
					<div className="w-full my-3">
						{field.type === 'select' ? (
							<InputSelect
								id={field.name}
								label={field.label}
								name={field.name}
								options={field.options}
								value={formData[field.name] || ''}
								register={register}
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
										value={formData[field.name] || ''}
										placeholder={field.placeholder}
										register={register}
										displayCondition={field.displayCondition}
										errors={errors}
										checked={selectedToggleSwitch}
									/>
								) : (
									<InputText
										type={field.type}
										id={field.name}
										name={field.name}
										value={formData[field.name] || ''}
										placeholder={field.placeholder}
										required={field.required}
										register={register}
										displayCondition={field.displayCondition}
										errors={errors}
										onChange={handleInputChange}
									/>
								)}
							</>
						)}
					</div>
				</div>
			);
		});
	};
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div
				className="
					grid
					grid-cols-1
					md:grid-cols-2
					gap-0
				"
			>
				{data?.map((g, i) => (
					<div key={i} className="w-full bg-white">
						<Heading title={g.label} size="font-normal text-lg mx-4 pb-2 text-gray-900 border-b" />
						<div className="flex flex-col px-4 h-full">{renderFields(g.fields)}</div>
					</div>
				))}
			</div>
			<div className="flex flex-row gap-4 px-4">
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
					onClick={() => router.push('/')}
					classNames="w-full px-4 pl-2 text-gray-600"
					color="gray"
					size="sm"
					icon={AppIcons['close']}
					iconSize={24}
				/>
			</div>
		</form>
	);
};

export default FormPage;

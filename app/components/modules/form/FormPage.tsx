import { FormField, FormFieldGroup } from '@/app/types';
import { useParams, useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import ButtonComponent from '../../Button';
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
					<label
						htmlFor={field.name}
						className="font-semibold w-full md:min-w-[240px] lg:max-w-[200px] xl:max-w-[300px]"
					>
						{field.label}
					</label>
					<div className="w-full min-w-[340px] lg:max-w-[260px] md:min-w-[340px] lg:min-w-[300px] xl:min-w-[340px] xl:max-w-[340px] my-3">
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
							/>
						)}
					</div>
				</div>
			);
		});
	};
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			{data?.map((g, i) => (
				<div key={i} className="w-full space-y-2">
					<h2 className="text-2xl font-bold">{g.label}</h2>
					{renderFields(g.fields)}
				</div>
			))}
			<div className="flex flex-row">
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

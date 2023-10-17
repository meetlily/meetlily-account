// OrganizationForm.tsx

import { ChangeEvent, useState } from 'react';

interface FormData {
	[key: string]: string | boolean | number | string[]; // Define the types you expect for form fields
}

const initialFormData: FormData = {};
// Define types for form fields
interface FormField {
	label: string;
	name: string;
	type: 'text' | 'textarea' | 'checkbox' | 'number' | 'multiselect';
	value?: string | boolean | number | string[];
	required?: boolean;
	options?: string[];
}

// Define the type for the onSubmit function
type SubmitHandler = (formData: Record<string, any>) => void;

const OrganizationForm: React.FC<{ formFields: FormField[]; onSubmit: SubmitHandler }> = ({
	formFields,
	onSubmit
}) => {
	const [formData, setFormData] = useState<FormData>(initialFormData);

	const handleChange = (e: ChangeEvent<any>) => {
		const { name, value, type, checked, options, multiple } = e.target;
		const newValue =
			type === 'checkbox' ? checked : multiple ? [...options].map((o) => o.value) : value;

		setFormData((prevFormData) => ({
			...prevFormData,
			[name]: newValue
		}));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		onSubmit(formData);
	};

	return (
		<form onSubmit={handleSubmit}>
			{formFields.map((field, index) => (
				<div key={index}>
					<label>{field.label}</label>
					{field.type === 'text' && (
						<input
							type="text"
							name={field.name}
							value={formData[field.name] as string}
							onChange={handleChange}
							required={field.required}
						/>
					)}
					{field.type === 'textarea' && (
						<textarea
							name={field.name}
							value={formData[field.name] as string}
							onChange={handleChange}
						/>
					)}
					{field.type === 'checkbox' && (
						<input
							type="checkbox"
							name={field.name}
							checked={formData[field.name] as boolean}
							onChange={handleChange}
						/>
					)}
					{field.type === 'number' && (
						<input
							type="number"
							name={field.name}
							value={formData[field.name] as number}
							onChange={handleChange}
							required={field.required}
						/>
					)}
					{field.type === 'multiselect' && (
						<select
							name={field.name}
							multiple
							value={formData[field.name] as string[]}
							onChange={handleChange}
							required={field.required}
						>
							{field.options?.map((option, optionIndex) => (
								<option key={optionIndex} value={option}>
									{option}
								</option>
							))}
						</select>
					)}
				</div>
			))}
			<button type="submit">Submit</button>
		</form>
	);
};

export default OrganizationForm;

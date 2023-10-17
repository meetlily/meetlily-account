'use client';

import moduleData from '@/data/moduleFormFields/module.json';
import React, { useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import FormRenderFields from './FormRenderFields';
interface Module {
	module: string;
	description: string;
	dataSources: {
		database: string;
		connectionString: string;
	};
	collections: Collection[];
	customization: {
		logoUrl: string;
		themeColor: string;
	};
}

interface Collection {
	name: string;
	model: string;
	description: string;
	fields: Field[];
}

interface Field {
	name: string;
	type: string;
	required?: boolean;
	default?: string;
}
interface FormProps {
	moduleConfig?: any;
}

const ModuleForm: React.FC<FormProps> = ({ moduleConfig }) => {
	const [formData, setFormData] = useState<any>();

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
	) => {
		const { name, value, type } = e.target;

		// Use type assertions to access 'checked' property for checkboxes
		const newValue = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;

		setFormData({ ...formData, [name]: newValue });
	};
	const {
		register,
		reset,
		handleSubmit,
		formState: { errors }
	} = useForm<FieldValues>({
		defaultValues: moduleConfig
	});
	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		console.log(data);
	};

	return (
		<FormRenderFields fields={moduleData[0]?.fields} values={moduleData[0]?.values} />
		// <form onSubmit={handleSubmit(onSubmit)}>
		// 	<label htmlFor="module">Module:</label>
		// 	<input
		// 		type="text"
		// 		id="module"
		// 		name="module"
		// 		//value={formData.module}
		// 		onChange={handleChange}
		// 	/>
		// 	<label htmlFor="description">Description:</label>
		// 	<input
		// 		type="text"
		// 		id="description"
		// 		name="description"
		// 		//value={formData.description}
		// 		onChange={handleChange}
		// 	/>
		// 	<CountrySelect onChange={function (value: CountrySelectValue): void {}} />
		// 	{/* Add more form fields for other properties here */}
		// 	<button type="submit">Submit</button>
		// </form>
	);
};

export default ModuleForm;

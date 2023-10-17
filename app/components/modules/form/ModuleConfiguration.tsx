import React, { useState } from 'react';
interface FormField {
	label: string;
	name: string;
	type: string;
	required?: boolean;
	options?: string[];
	default?: string;
}

interface CollectionField {
	name: string;
	type: string;
	label: string;
	required?: boolean;
	default?: string;
}

const ModuleConfiguration: React.FC = () => {
	const [formData, setFormData] = useState<any>({});

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
	) => {
		const { name, value, type } = e.target;

		// Handle different input types
		const newValue = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;

		setFormData({ ...formData, [name]: newValue });
	};

	// Define the form fields based on your JSON configuration
	const formFields: FormField[] = [
		{ label: 'Module', name: 'module', type: 'text', required: true },
		{ label: 'Description', name: 'description', type: 'text', required: true },
		{ label: 'Database', name: 'dataSources.database', type: 'text', required: true },
		{
			label: 'Connection String',
			name: 'dataSources.connectionString',
			type: 'text',
			required: true
		}
	];

	const collectionFields: CollectionField[] = [
		{ label: 'Username', name: 'username', type: 'text', required: true },
		{ label: 'Email', name: 'email', type: 'text', required: true },
		{ label: 'Password', name: 'password', type: 'text', required: true },
		{ label: 'createdAt', name: 'createdAt', type: 'date', default: 'Date.now' }
	];

	return (
		<div className="flex flex-col">
			<form>
				<div className="flex flex-col justify-start"></div>
			</form>
		</div>
	);
};

export default ModuleConfiguration;

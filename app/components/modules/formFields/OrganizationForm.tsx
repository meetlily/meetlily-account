'use client';
import { OrganizationFormProps } from '@/app/types';
import { useState } from 'react';
import ButtonComponent from '../../Button';
import AppIcons from '../../icons/AppIcons';
import FlowInput from '../../inputs/FlowInput';

const OrganizationForm: React.FC<OrganizationFormProps> = ({ formFields, group }) => {
	const [formData, setFormData] = useState<{ [key: string]: string }>({});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({ ...prevData, [name]: value }));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Perform form submission logic here
	};

	return (
		<form onSubmit={handleSubmit} className="p-4">
			{formFields.map((group) => (
				<div key={group.label}>
					<h3 className="py-4 font-bold">{group.label}</h3>
					{group.fields.map((field) => (
						<div key={field.name} className="pb-4">
							<FlowInput
								label={field.label}
								showLabel={true}
								type={field.type}
								id={field.name}
								name={field.name}
								placeholder={field.placeholder}
								value={formData[field.name] || ''}
								onChange={handleChange}
							/>
						</div>
					))}
				</div>
			))}
			<div className="flex-flex-col my-4">
				<ButtonComponent icon={AppIcons['signUp']} label="Submit" />
			</div>
		</form>
	);
};

export default OrganizationForm;

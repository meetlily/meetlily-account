'use client';

import { Select } from 'flowbite-react';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

interface InputSelectProps {
	id: string;
	label: string;
	name: string;
	value?: string | number;
	options?: any;
	disabled?: boolean;
	required?: boolean;
	onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
	register: UseFormRegister<FieldValues>;
	errors: FieldErrors;
}
interface FormData {
	[fieldName: string]: string | number;
}
const InputSelect: React.FC<InputSelectProps> = ({
	id,
	label,
	name,
	value,
	options,
	disabled,
	required,
	register,
	onChange,
	errors
}) => {
	const handleInputChange = onChange;
	return (
		<>
			<Select
				{...register(id, { required })}
				id={id}
				required={required}
				disabled={disabled}
				onChange={handleInputChange}
				name={name}
			>
				{options?.map((option: string) => (
					<option key={option} value={option}>
						{option}
					</option>
				))}
			</Select>
		</>
	);
};

export default InputSelect;

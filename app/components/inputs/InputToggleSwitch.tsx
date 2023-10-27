'use client';

import { ToggleSwitch } from 'flowbite-react';
import { useState } from 'react';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

interface InputToggleSwitchProps {
	id: string;
	label: string;
	name: string;
	value: boolean | string | any;
	options?: any;
	disabled?: boolean;
	required?: boolean;
	onToggle?: (name: string, value: boolean) => void;
	onChange: (checked: boolean, name: string) => void;
	register: UseFormRegister<FieldValues>;
	errors: FieldErrors;
}
interface FormData {
	[fieldName: string]: string | number;
}
const InputToggleSwitch: React.FC<InputToggleSwitchProps> = ({
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
	const [isChecked, setIsChecked] = useState<boolean>(value);
	const handleToggle = (checked: boolean) => {
		setIsChecked(checked);
		onChange(checked, name);
	};
	return (
		<>
			<ToggleSwitch
				id={id}
				{...register(id, { required })}
				onChange={handleToggle}
				value={value}
				checked={isChecked ? isChecked : false}
			/>
		</>
	);
};

export default InputToggleSwitch;

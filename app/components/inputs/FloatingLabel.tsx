'use client';

import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

interface FloatingLabelProps {
	id: string;
}
interface FloatingLabelProps {
	id: string;
	label?: string;
	className?: string;
	name: string;
	type: string;
	iconName?: string | 'ban';
	helperText?: string;
	placeholder?: string;
	value?: any;
	disabled?: boolean;
	required?: boolean;
	register?: UseFormRegister<FieldValues>;
	errors?: FieldErrors;
	onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
	displayCondition?: string;
	checked?: boolean;
	onToggle?: (checked: boolean, name: string) => void;
}

const FloatingLabel: React.FC<FloatingLabelProps> = ({
	id,
	label,
	className,
	name,
	type,
	iconName,
	helperText,
	placeholder,
	value,
	disabled,
	required,
	errors,
	register,
	onChange,
	checked,
	onToggle,
	displayCondition
}) => {
	return (
		<div className="relative z-0">
			<input
				name={name}
				id={id}
				disabled={disabled}
				placeholder={placeholder}
				type={type}
				value={value}
				//onChange={onChange}
				className={`
				block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-gray-600 peer`}
			/>
			<label
				htmlFor={name}
				className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-600 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
			>
				{name}
			</label>
		</div>
	);
};

export default FloatingLabel;

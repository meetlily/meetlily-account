'use client';

import { Checkbox, FileInput, TextInput, Textarea, ToggleSwitch } from 'flowbite-react';
import { useState } from 'react';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import AppIcons from '../icons/AppIcons';

interface InputTextProps {
	id: string;
	className?: string;
	name: string;
	type: string;
	iconName?: string | 'ban';
	helperText?: string;
	placeholder?: string;
	value?: string | number;
	disabled?: boolean;
	required?: boolean;
	register: UseFormRegister<FieldValues>;
	errors: FieldErrors;
	onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
	displayCondition?: string;
	checked?: boolean | false;
}

const InputText: React.FC<InputTextProps> = ({
	id,
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
	displayCondition
}) => {
	let iconMain = '';
	const [inputValue, setInputValue] = useState(value);
	if (
		type === 'text' ||
		type === 'number' ||
		type === 'password' ||
		type === 'color' ||
		type === 'date'
	) {
		return (
			<>
				{iconName ? (
					<TextInput
						{...register(id, { required })}
						className={`
							${errors[id] ? 'border border-red-500' : 'border-neutral-300'}
							${errors[id] ? 'focus:border-red-500' : 'focus:border-cyan-500'}
						`}
						color={`

						`}
						id={id}
						type={type}
						required={required}
						name={name}
						placeholder={placeholder}
						icon={AppIcons[iconName]}
						onChange={onChange}
					/>
				) : (
					<TextInput
						{...register(id, { required })}
						className={`
						rounded-lg
						${errors[id] ? 'border border-red-500' : 'border-neutral-300'}
						${errors[id] ? 'focus:border-red-500' : 'focus:border-cyan-500'}}
						`}
						id={id}
						type={type}
						required={required}
						name={name}
						placeholder={placeholder}
						onChange={onChange}
					/>
				)}
			</>
		);
	} else if (type === 'textarea') {
		return (
			<>
				<Textarea
					{...register(id, { required })}
					className={`
					rounded-lg
					${errors[id] ? 'border border-red-500' : 'border-neutral-300'}
					${errors[id] ? 'focus:border-red-500' : 'focus:border-cyan-500'}
					`}
					id={id}
					required={required}
					name={name}
					placeholder={placeholder}
					rows={2}
				/>
			</>
		);
	} else if (type === 'file') {
		return (
			<>
				<FileInput
					{...register(id, { required })}
					helperText={helperText}
					className={`
						${errors[id] ? 'border-red-500' : 'border-neutral-300'}
						${errors[id] ? 'focus:border-red-500' : 'focus:border-cyan-500'}
					`}
					id={id}
					required={required}
					disabled={disabled}
					name={name}
					placeholder={placeholder}
					onChange={onChange}
				/>
			</>
		);
	} else if (type === 'checkbox') {
		return (
			<>
				<Checkbox
					{...register(id, { required })}
					className={`
					rounded-lg
					${errors[id] ? 'border border-red-500' : 'border-neutral-300'}
					${errors[id] ? 'focus:border-red-500' : 'focus:border-cyan-500'}
					`}
					id={id}
					required={required}
					disabled={disabled}
					name={name}
					placeholder={placeholder}
					onChange={onChange}
					checked={checked}
				/>
			</>
		);
	} else if (type === 'url') {
		return (
			<>
				<TextInput
					{...register(id, { required })}
					className={`
					rounded-lg
					${errors[id] ? 'border border-red-500' : 'border-neutral-300'}
					${errors[id] ? 'focus:border-red-500' : 'focus:border-cyan-500'}
					`}
					id={id}
					type={type}
					required={required}
					disabled={disabled}
					name={name}
					placeholder={placeholder}
					icon={AppIcons['website']}
					onChange={onChange}
				/>
			</>
		);
	} else if (type === 'email') {
		return (
			<>
				<TextInput
					{...register(id, { required })}
					className={`
					rounded-lg
					${errors[id] ? 'border border-red-500' : 'border-neutral-300'}
					${errors[id] ? 'focus:border-red-500' : 'focus:border-cyan-500'}
					`}
					id={id}
					type={type}
					required={required}
					disabled={disabled}
					name={name}
					placeholder={placeholder}
					icon={AppIcons['email']}
					onChange={onChange}
				/>
			</>
		);
	} else if (type === 'tel') {
		return (
			<>
				<TextInput
					{...register(id, { required })}
					className={`
					rounded-lg
					${errors[id] ? 'border border-red-500' : 'border-neutral-300'}
					${errors[id] ? 'focus:border-red-500' : 'focus:border-cyan-500'}
					`}
					id={id}
					type={type}
					required={required}
					disabled={disabled}
					name={name}
					placeholder={placeholder}
					icon={AppIcons['phone']}
					onChange={onChange}
				/>
			</>
		);
	} else if (type === 'toggle') {
		return (
			<>
				<ToggleSwitch
					checked={false}
					{...register(id, { required })}
					id={id}
					disabled={disabled}
					name={name}
					placeholder={placeholder}
					onChange={() => {}}
				/>
			</>
		);
	}
};

export default InputText;

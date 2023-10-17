'use client';

import { FileInput, TextInput, Textarea, ToggleSwitch } from 'flowbite-react';
import { useState } from 'react';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import AppIcons from '../icons/AppIcons';

interface InputTextProps {
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
	register: UseFormRegister<FieldValues>;
	errors: FieldErrors;
	onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
	displayCondition?: string;
	checked?: boolean;
	onToggle?: (checked: boolean, name: string) => void;
}

const InputText: React.FC<InputTextProps> = ({
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
	const [toggleVal, setToggleVal] = useState(checked);
	const handleChange = (checked: boolean) => {
		register(name, { value: checked });
		setToggleVal(checked);
		onToggle?.(checked, name);
	};
	if (type === 'text' || type === 'number' || type === 'password' || type === 'date') {
		return (
			<>
				{iconName ? (
					<TextInput
						{...register(id, { required })}
						className={`
							${errors[id] ? 'border border-red-500' : 'border-neutral-300'}
							${errors[id] ? 'focus:border-red-500' : 'focus:border-orange-500'}
						`}
						color={`

						`}
						id={id}
						type={type}
						required={required}
						name={name}
						value={value}
						placeholder={placeholder}
						icon={AppIcons[iconName]}
						onChange={onChange}
					/>
				) : (
					<TextInput
						{...register(id, { required })}
						className={`
						rounded-lg flex flex-col w-full
						${errors[id] ? 'border border-red-500' : 'border-neutral-300'}
						${errors[id] ? 'focus:border-red-500' : 'focus:border-orange-500'}}
						`}
						id={id}
						type={type}
						required={required}
						name={name}
						value={value}
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
					rounded-lg flex flex-col w-full
					${errors[id] ? 'border border-red-500' : 'border-neutral-300'}
					${errors[id] ? 'focus:border-red-500' : 'focus:border-orange-500'}
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
						${errors[id] ? 'focus:border-red-500' : 'focus:border-orange-500'}
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
				<ToggleSwitch
					id={id}
					{...register(id, { required })}
					onChange={handleChange}
					checked={toggleVal ? toggleVal : false}
				/>
				{/* <Checkbox
					{...register(id, { required })}
					className={`
					rounded-lg flex flex-col w-full
					${errors[id] ? 'border border-red-500' : 'border-neutral-300'}
					${errors[id] ? 'focus:border-red-500' : 'focus:border-orange-500'}
					`}
					id={id}
					required={required}
					disabled={disabled}
					name={name}
					placeholder={placeholder}
					onChange={onChange}
					checked={checked}
				/> */}
			</>
		);
	} else if (type === 'url') {
		return (
			<>
				<TextInput
					{...register(id, { required })}
					className={`
					rounded-lg flex flex-col w-full
					${errors[id] ? 'border border-red-500' : 'border-neutral-300'}
					${errors[id] ? 'focus:border-red-500' : 'focus:border-orange-500'}
					`}
					id={id}
					type={type}
					required={required}
					disabled={disabled}
					name={name}
					value={value}
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
					rounded-lg flex flex-col w-full
					${errors[id] ? 'border border-red-500' : 'border-neutral-300'}
					${errors[id] ? 'focus:border-red-500' : 'focus:border-orange-500'}
					`}
					id={id}
					type={type}
					required={required}
					disabled={disabled}
					name={name}
					value={value}
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
					rounded-lg flex flex-col w-full
					${errors[id] ? 'border border-red-500' : 'border-neutral-300'}
					${errors[id] ? 'focus:border-red-500' : 'focus:border-orange-500'}
					`}
					id={id}
					type={type}
					required={required}
					disabled={disabled}
					name={name}
					value={value}
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
					id={id}
					{...register(id, { required })}
					onChange={handleChange}
					checked={toggleVal ? toggleVal : false}
				/>
			</>
		);
	} else if (type === 'hidden') {
		return (
			<>
				<input type={type} value={value} {...register(id, { required })} />
			</>
		);
	} else if (type === 'color') {
		return (
			<>
				<TextInput
					{...register(id, { required })}
					className={`
						${errors[id] ? 'border border-red-500' : 'border-neutral-300'}
						${errors[id] ? 'focus:border-red-500' : 'focus:border-orange-500'}}
						`}
					id={id}
					type={type}
					required={required}
					name={name}
					value={value}
					placeholder={placeholder}
					onChange={onChange}
				/>
			</>
		);
	}
};

export default InputText;

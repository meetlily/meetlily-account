'use client';

import { Card, Dropdown, FileInput, TextInput, ToggleSwitch } from 'flowbite-react';
import { useCallback, useState } from 'react';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import AppIcons from '../icons/AppIcons';
import IconComponent from '../icons/IconComponent';
type InputProps = {
	id: string;
	name?: string;
	type?: string;
	helperText?: string;
	placeholder?: string;
	iconName?: string | 'file';
	disabled?: boolean;
	formatPrice?: boolean;
	required?: boolean;
	rounded?: boolean;
	transparent?: boolean;
	borderLine?: boolean;
	value: any;
	register: UseFormRegister<FieldValues>;
	errors: FieldErrors;
	onChange?: (value: any) => void;
	displayCondition?: string;
	checked?: boolean;
	className?: string;
};
const InputText: React.FC<InputProps> = ({
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
	const [toggleVal, setToggleVal] = useState(checked);
	const [iconShow, setIconShow] = useState<boolean>(false);
	const [valueData, setValueData] = useState<string>('');
	const [iconValue, setIconValue] = useState<string>('');
	const selectIcon = useCallback((e: string, v: string) => {
		setIconValue(v);
		setValueData(v);
	}, []);
	const toggleIcon = () => {
		//register(name, { value: checked });
		if (!iconShow) {
			return setIconShow(true);
		}
		return setIconShow(false);
	};
	if (id === 'çreatedAt') {
		return (
			<>
				<div>{value}</div>
			</>
		);
	}
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
						color={``}
						id={id}
						type={type}
						required={required}
						value={value}
						placeholder={placeholder}
						icon={AppIcons[iconName]}
						//onChange={onChange}
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
					value={value}
					placeholder={placeholder}
					onChange={onChange}
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
					placeholder={placeholder}
					value={value}
					//onChange={() => onChange(name, value)}
				/>
			</>
		);
	} else if (type === 'checkbox') {
		return (
			<>
				<ToggleSwitch
					id={id}
					{...register(id, { required })}
					onChange={() => onChange}
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
					//onChange={() => onChange(name, value)}
				/>
			</>
		);
	} else if (type === 'toggle') {
		return (
			<>
				<ToggleSwitch
					id={id}
					{...register(id, { required })}
					onChange={() => onChange}
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
					//onChange={() => onChange(name, value)}
				/>
			</>
		);
	} else if (type === 'icon') {
		// const handleChange = useCallback(
		// 	(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
		// 		console.log(e);
		// 		const { name, value } = e.target;
		// 		setIconValue(value);
		// 		register(name, { value: value });
		// 		//onChange(e);
		// 	},
		// 	[]
		// );
		const iconC = (
			<>
				<div className="flex flex-row items-center justify-start gap-4 ">
					{value && <IconComponent iconName={iconValue} size={36} class_name="w-[60px]" />}

					<div
						className="
                            relative
                            cursor-pointer
                            hover:opacity-70
                            transition
                            border-dashed
                            border-2
                            px-10
							py-4
                            border-neutral-300
                            flex
                            flex-row
                            justify-center
                            items-center
                            gap-4
                            text-gray-500 dark:text-gray-200
                        "
					>
						<IconComponent iconName="icons" />
						<div className="font-semibold text-md ">Click to select an icon</div>
					</div>
				</div>
			</>
		);
		return (
			<>
				<Dropdown color="light" label={iconC} dismissOnClick={true} placement="top">
					<div className="w-full h-[300px] p-4 overflow-auto">
						<div className="grid grid-cols-8 gap-2 items-center justify-center">
							{Object.keys(AppIcons).map((icon) => (
								<Card
									key={icon}
									className="rounded-md hover:cursor-pointer hover:bg-gray-200"
									onClick={(icon) => selectIcon}
								>
									<div className="flex flex-col items-center justify-center w-full overflow-hidden">
										<IconComponent iconName={icon} size={26} />
										<div className="text-[8px] text-center">{icon}</div>
									</div>
								</Card>
							))}
						</div>
					</div>
				</Dropdown>
			</>
		);
	}
};

export default InputText;

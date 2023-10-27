'use client';

import axios from 'axios';
import { Card, Tooltip } from 'flowbite-react';
import { useEffect, useState } from 'react';
import Select from 'react-select';
import ButtonIcon from '../ButtonIcon';
import IconComponent from '../icons/IconComponent';
export type SelectValue = {
	id?: string;
	name?: string;
	slug?: string;
	title?: string;
	provider?: string;
};
interface InputSelectProps {
	value: SelectValue;
	onChange: (value: SelectValue) => void;
	name?: string;
	id?: string;
}
interface FormData {
	[fieldName: string]: string | number;
}
const InputSelect: React.FC<InputSelectProps> = ({ value, onChange, name, id }) => {
	//const { getAll } = useAccounts();
	const nName = name?.toLowerCase().replace(/\s+/g, '-');
	const [options, setOptions] = useState<SelectValue[]>();
	useEffect(() => {
		if (nName) {
			//setOptions([]);

			axios
				.get(`/api/${nName}`)
				.then((response) => {
					if (response && response.data) {
						if (Array.isArray(response.data)) {
							setOptions(response.data);
						} else {
							setOptions(response.data.values);
						}
					}
				})
				.catch((err: any) => {
					setOptions([]);
				});
		}
	}, [nName]);
	if (nName === 'formdata' || nName === 'formfield') {
		return (
			<>
				<div></div>
			</>
		);
	}
	if (nName === 'module') {
		if (Array.isArray(value)) {
			return (
				<>
					<div className="flex flex-row items-center justify-start gap-2">
						{value.map((v: any, i: number) => (
							<ButtonIcon
								key={i}
								classNames="text-sm py-1 px-2"
								icon={v.slug}
								showLabel
								shadow
								outline
								inline
								rounded
								label={`${v.name}`}
							/>
						))}
						<ButtonIcon
							classNames="text-sm py-1 px-2"
							icon={'add'}
							shadow
							outline
							inline
							rounded
							label={`${nName}`}
						/>
					</div>
				</>
			);
		} else {
			return (
				<>
					<div className="flex flex-row items-center justify-start gap-2">
						<ButtonIcon
							classNames="text-sm py-1 px-2"
							icon={'add'}
							showLabel
							shadow
							outline
							inline
							rounded
							label={`${nName}`}
						/>
					</div>
				</>
			);
		}
	}
	if (nName === 'accounts') {
		if (Array.isArray(value)) {
			return (
				<>
					<div className="flex flex-row items-center justify-start  gap-2">
						{value.map((v: any, i: number) => (
							<Tooltip key={i} title={v.provider} content={v.provider}>
								<Card className="text-gray-800 text-sm p-1 border-1 border-gray-800 rounded-md">
									<IconComponent iconName={v.provider} />
								</Card>
							</Tooltip>
						))}
					</div>
				</>
			);
		}
	}
	return (
		<>
			<Select
				placeholder={`Please select a ${nName}`}
				isClearable
				isSearchable
				value={value}
				options={options}
				id={id}
				onChange={(value) => onChange(value as unknown as SelectValue)}
				formatOptionLabel={(option: any) => (
					<div className="flex flex-row items-center gap-3 text-gray-800  hover:text-cyan-500 hover:cursor-pointer">
						<div className="ml-1 ">{option.name || ''}</div>
						<div className={`${option.id ? 'inline' : 'hidden'}`}>
							<span className="text-neutral-500 text-xs">({option.id})</span>
						</div>
					</div>
				)}
				classNames={{
					control: () => 'p-1 border-1',
					input: () => 'text-normal',
					option: () => 'border-b'
				}}
				theme={(theme) => ({
					...theme,
					borderRadius: 6,
					colors: {
						...theme.colors,
						primary: '#fff'
						//primary25: 'gray'
					}
				})}
			/>
			{/* {options?.map((option: string) => (
					<option key={option} value={option}>
						{option}
					</option>
				))}
			</Select> */}
		</>
	);
};

export default InputSelect;

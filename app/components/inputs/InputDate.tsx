'use client';

import { Datepicker } from 'flowbite-react';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

export type InputDateProps = {
	id: string;
	label: string;
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
	value?: any;
	register: UseFormRegister<FieldValues>;
	errors: FieldErrors;
	onChange?: (value: any) => void;
	displayCondition?: string;
	checked?: boolean;
	className?: string;
};
interface FormData {
	[fieldName: string]: string | number;
}
const InputDate: React.FC<InputDateProps> = ({ value, onChange, name, id, register, required }) => {
	const nName = name?.toLowerCase().replace(/\s+/g, '-');
	const options = {
		title: name,
		autoHide: true,
		todayBtn: false,
		clearBtn: true,
		clearBtnText: 'Clear',
		maxDate: new Date('2030-01-01'),
		minDate: new Date('1950-01-01'),
		theme: {
			background: 'bg-gray-700 dark:bg-gray-800',
			todayBtn: '',
			clearBtn: '',
			icons: '',
			text: '',
			disabledText: 'bg-red-500',
			input: '',
			inputIcon: '',
			selected: ''
		},
		icons: {
			// () => ReactElement | JSX.Element
			prev: () => <span>Previous</span>,
			next: () => <span>Next</span>
		},
		datepickerClassNames: 'top-12',
		defaultDate: new Date('2022-01-01'),
		language: 'en',
		disabledDates: [],
		weekDays: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
		inputNameProp: 'date',
		inputIdProp: 'date',
		inputPlaceholderProp: 'Select Date',
		inputDateFormatProp: {
			day: 'numeric',
			month: 'long',
			year: 'numeric'
		}
	};
	if (id === 'çreatedAt') {
		return (
			<>
				<div>{value}</div>
				{/* {options?.map((option: string) => (
						<option key={option} value={option}>
							{option}
						</option>
					))}
				</Select> */}
			</>
		);
	}
	return (
		<>
			<Datepicker
				{...register(id, { required })}
				placeholder={`Please select a date`}
				showTodayButton={false}
				id={id}
				value={value}
				name={name}
				onSelectedDateChanged={onChange}
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

export default InputDate;

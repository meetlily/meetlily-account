'use client';

import { CONFIG } from '@/app/constant';
import { InputProps, ItemData } from '@/app/types/form';
import moment from 'moment';
import { FieldValues, useForm } from 'react-hook-form';
import InputIcon from './InputIcon';
import InputText from './InputText';
export function refactorDataToFields(data: any) {
	let fi: ItemData[] = [];
	Object.keys(data).map((e: any) => {
		let f: ItemData = {
			id: e,
			name: e,
			value: data[e],
			label: e,
			type: 'text'
		};

		if (e === 'id') {
			f.type = 'hidden';
		} else if (e === 'slug') {
			f.type = 'slug';
		} else if (e === 'country') {
			f.type = 'countrySelect';
		} else if (data[e].typeName === 'Boolean') {
			f.type = 'checkbox';
		} else if (Array.isArray(data[e])) {
			f.type = 'select';
		} else if (data[e].typeName === 'Json') {
			f.type = 'json';
		} else if (e === 'icon' || e === 'icon_name' || e === 'iconName') {
			f.type = 'icon';
		} else if (e === 'description') {
			f.type = 'textarea';
		} else if (e === 'Account' || e === 'Accounts') {
			f.type = 'accountSelect';
		} else if (e === 'password' || e === 'hashedPassword') {
			f.type = 'hidden';
		} else if (e === 'Formdata' || e === 'Formfield') {
			f.type = 'hidden';
		} else if (e === 'location') {
			f.type = 'locationSelect';
		} else if (e === 'email') {
			f.type = 'email';
		} else if (e === 'phone') {
			f.type = 'tel';
		} else if (e === 'logo' || e === 'Logo' || e === 'avatar') {
			f.type = 'image';
		} else if (e.includes('id') || e.includes('Id')) {
			f.type = 'hidden';
		} else if (e.includes('image') || e.includes('Image')) {
			f.type = 'image';
		} else if (e === 'emailVerified' || e === 'createdAt' || e === 'updatedAt') {
			f.type = 'dateHidden';
		} else if (e.includes('date')) {
			f.type = 'date';
		} else if (e.includes('link') || e.includes('Link') || e.includes('url') || e.includes('Url')) {
			f.type = 'url';
		} else if (data[e] === true || data[e] === false) {
			f.type = 'checkbox';
		} else {
			f.type = 'text';
		}

		fi.push(f);
	});
	return fi;
}
interface FormData {
	[fieldName: string]: string | number | boolean;
}
export function refactorFieldsToData(fields: any[]) {
	let data: FormData = {};
	fields.map((field: any) => {
		let { name, slug, id, value } = field;
		data[name] = value;
	});
	return data;
}
export function refactorObjectToFields(fields: any) {
	let data: any = {};
	Object.keys(fields).map((e, i) => {
		data[e] = null;
	});
	return data;
}
export function getFieldsKeys(fields: InputProps[]) {
	let data: any = [];
	fields.map((field: any, i: number) => {
		Object.keys(field).map((f, b) => {
			if (b <= CONFIG.NumList) {
				const found = data.find((item: any) => item === f);
				if (!found) {
					data.push(f);
				}
			}
		});
	});
	return data;
}
export function refactorFieldsKeys(item: InputProps[]) {
	let it: any = {};
	let field: any = {};
	Object.keys(item).map((i: any, b) => {
		field[i] = null;
		if (b <= CONFIG.NumList) {
			it[i] = item[i];

			if (typeof it[i] === 'object') {
				if (!Array.isArray(it[i])) {
					it[i] = JSON.stringify(it[i]);
				}
			}
			if (i === 'updatedAt' || i === 'createdAt' || i === 'emailVerified') {
				it[i] = moment(it[i]).format('LLL');
			}
		}
	});
	return it;
}
export function refactorDefaultFieldsKeys(item: InputProps[]) {
	let field: any = {};
	Object.keys(item).map((i: any, b) => {
		field[i] = null;
	});
	return field;
}
interface InputComponentProps {
	onChange: () => void;
	value: string;
	helperText?: string;
	name: string;
	type: string;
	id: string;
	label: string;
}
const InputComponent: React.FC<InputComponentProps> = ({
	value,
	helperText,
	name,
	onChange,
	type,
	id,
	label
}) => {
	const {
		register,
		reset,
		handleSubmit,
		formState: { errors }
	} = useForm<FieldValues>({
		defaultValues: {}
	});
	let inputContent = (
		<div
			className="
			    w-full
                flex
                flex-col
                gap-4
            "
		>
			<InputText
				register={register}
				id={id}
				errors={errors}
				name={name}
				value={value}
				onChange={onChange}
			/>
		</div>
	);
	if (type === 'icon') {
		inputContent = (
			<div
				className="
				w-full
                flex
                flex-col
                gap-4
					"
			>
				<InputIcon
					onChange={onChange}
					value={value}
					name={name}
					type={type}
					id={id}
					label={label}
				/>
			</div>
		);
	}
	// if (data.type === 'textarea') {
	// 	inputContent = (
	// 		<div
	// 			className="
	// 			w-full
	//             flex
	//             flex-col
	//             gap-4
	// 				"
	// 		>
	// 			<Textarea
	// 				onChange={() => {}}
	// 				value={data.value}
	// 				name={data.name}
	// 				aria-label={data.label}
	// 				placeholder={data.placeholder}
	// 				helperText={data.helperText}
	// 			/>
	// 		</div>
	// 	);
	// }
	return (
		<>
			<div className="flex w-full my-2">{inputContent}</div>
		</>
	);
};

export default InputComponent;

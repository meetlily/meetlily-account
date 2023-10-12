'use client';

import { TextInput } from 'flowbite-react';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import IconComponent from '../icons/IconComponent';

interface InputFloatingLabelProps {
	id: string;
	label: string;
	type?: string;
	disabled?: boolean;
	formatPrice?: boolean;
	required?: boolean;
	register: UseFormRegister<FieldValues>;
	errors: FieldErrors;
}
const InputFloatingLabel: React.FC<InputFloatingLabelProps> = ({
	id,
	label,
	type,
	disabled,
	formatPrice,
	required,
	register,
	errors
}) => {
	return (
		<div className="w-full relative">
			{formatPrice && (
				<IconComponent
					iconName="dollar"
					size={24}
					class_name="text-neutral-700
				absolute
				top-5
				left-2"
				/>
			)}
			<TextInput
				id={id}
				disabled={disabled}
				{...register(id, { required })}
				placeholder=" "
				type={type}
				className={`
             peer
             w-full
             p-4
             pt-6
             font-light
           bg-white
             border 
           border-gray-300
             rounded-md
             outline-none
             transition
             disabled:opacity-70
             disabled:cursor-not-allowed
             ${formatPrice ? 'pl-9' : 'pl-4'}
             ${errors[id] ? 'border-rose-500' : 'border-neutral-300'}
             ${errors[id] ? 'focus:border-rose-500' : 'focus:border-cyan-500'}
          `}
			/>
			<label
				htmlFor={id}
				className={`
                absolute
              duration-150
              transform
              -translate-y-3
              top-5
              z-10
              origin-[0]
              ${formatPrice ? 'left-9' : 'left-4'}
              peer-placeholder-shown:scale-100
              peer-placeholder-shown:translate-y-0
              peer-focus:scale-75
              peer-focus:-translate-y-4
              peer-placeholder-shown:font-sans
              peer-placeholder-shown:font-light
              ${errors[id] ? 'text-rose-500' : 'text-zinc-400'}

            `}
			>
				{label}
			</label>
		</div>
	);
};

export default InputFloatingLabel;

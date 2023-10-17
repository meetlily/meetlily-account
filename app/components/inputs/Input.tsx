'use client';

import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import { BiDollar } from 'react-icons/bi';

interface InputProps {
	id: string;
	label: string;
	type?: string;
	helperText?: string;
	placeholder?: string;
	disabled?: boolean;
	formatPrice?: boolean;
	required?: boolean;
	value?: string | number | readonly string[] | undefined;
	register: UseFormRegister<FieldValues>;
	errors: FieldErrors;
	onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}
const Input: React.FC<InputProps> = ({
	id,
	label,
	type,
	placeholder,
	helperText,
	disabled,
	formatPrice,
	required,
	value,
	register,
	errors,
	onChange
}) => {
	return (
		<div className="w-full relative">
			{formatPrice && (
				<BiDollar
					size={24}
					className="
              text-neutral-800
              absolute
              top-5
              left-2
            "
				/>
			)}
			<input
				id={id}
				disabled={disabled}
				{...register(id, { required })}
				placeholder={placeholder}
				type={type}
				value={value}
				onChange={onChange}
				className={`
             peer
             w-full
             px-1
			 pb-1
             pt-7
             font-light
           bg-transparent 
            outline-none
             border-1
				border-t-0
				border-l-0
				border-r-0
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
              ${errors[id] ? 'text-rose-500' : 'text-zinc-500'}
        `}
			>
				{label}
			</label>
		</div>
	);
};

export default Input;

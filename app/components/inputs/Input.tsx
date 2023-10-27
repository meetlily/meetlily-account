'use client';

import { InputProps } from '@/app/types/form';
import { BiDollar } from 'react-icons/bi';

const Input: React.FC<InputProps> = ({
	id,
	label,
	name,
	type,
	placeholder,
	iconName,
	helperText,
	disabled,
	formatPrice,
	required,
	value,
	register,
	errors,
	onChange,
	displayCondition,
	checked,
	rounded,
	transparent,
	borderLine
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
				//onChange={onChange}
				className={`
             peer
             w-full
             px-1
			 pb-4
             pt-7
             font-light
             text-sm
             outline-none
             transition
	
             disabled:opacity-70
             disabled:cursor-not-allowed
             ${formatPrice ? 'pl-9' : 'pl-4'}
             ${errors[id] ? 'border-rose-500' : 'border-neutral-300'}
             ${errors[id] ? 'focus:border-rose-500' : 'focus:border-cyan-500'}
			 rounded-0
				bg-transparent
				border-b-1 border-t-0 border-l-0 border-r-0
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
			  capitalize
              ${errors[id] ? 'text-rose-500' : 'text-cyan-500'}
			  ${type === 'hidden' ? 'hidden' : ''}
        `}
			>
				{label}
			</label>
		</div>
	);
};

export default Input;

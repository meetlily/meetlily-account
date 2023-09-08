'use client';

import { IconType } from "react-icons";

interface ButtonProps {
    label: string;
    onClick: (e:React.MouseEvent<HTMLButtonElement>)=>void;
    disabled?: boolean;
    outline?: boolean;
    small?: boolean;
    icon?: IconType
}
const Button: React.FC<ButtonProps> = ({
    label,
    onClick,
    disabled,
    outline,
    small,
    icon: Icon
}) => {

    return (
      <button 
        onClick={onClick}
        disabled={disabled}
        className={`
            relative
            disabled:cursor-not-allowed
            disabled:opacity-70
            rounded-md
            hover:opacity-80
            transition
            w-full
            ${outline ? 'bg-white' : 'bg-orange-500'}
            ${outline ? 'border-gray-300' : 'border-orange-600'}
            ${outline ? 'text-gray-700' : 'text-white'}
            ${outline ? 'border-[1px]' : 'border-[1px]'}
            ${small ? 'py-1' : 'py-2'}
            ${small ? 'px-4' : 'px-4'}
            ${small ? 'text-sm' : 'text-md'}
            ${small ? 'font-light' : 'font-semibold'}
        `}
      >
        {Icon && (
            <Icon 
                size={24}
                className="
                    absolute
                    left-2
                    top-2
                "
            />
        )}
        {label}
      </button>
    )
}

export default Button;
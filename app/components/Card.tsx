'use client';

import { IconType } from "react-icons";
import Heading from "./Heading";
interface CardProps {
    label: string;
    description?: string;
    onClick: (e:React.MouseEvent<HTMLButtonElement>)=>void;
    disabled?: boolean;
    outline?: boolean;
    rounded?: boolean;
    small?: boolean;
    icon?: IconType;
    iconSize?: number;
    color?: string;
}
const Card: React.FC<CardProps> = ({
    label,
    description,
    onClick,
    disabled,
    outline,
    rounded,
    small,
    icon: Icon,
    iconSize,
    color
}) => {

    return (
      <div 
        className={`
            py-4
            px-8
            text-center
            ${outline ? 'border-[1px]' : ''}
            ${rounded ? 'rounded-md' : 'rounded-none'}
            mt-2
            ${color ? `text-${color}-500` : 'text-black'}
            ${color ? `border-${color}-500` : 'border-black'}
            ${color ? `hover:shadow-lg` : ''}
            transition
            cursor-pointer
        `}
        >
        {Icon && (
            <Icon 
                size={iconSize ? iconSize : 36}
                className={`
                    block
                    mx-auto
                    ${color ? `text-${color}-500` : 'text-black'}
                `}
            />
        )}
        <Heading title={label} center subtitle={description}/>
      </div>
    )
}

export default Card;
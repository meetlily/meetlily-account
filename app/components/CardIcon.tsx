'use client';

import { IconType } from "react-icons";
import Heading from "./Heading";
import IconComponent from "./icons/IconComponent";
interface CardIconProps {
    label: string;
    description?: string;
    onClick: (e:React.MouseEvent<HTMLButtonElement>)=>void;
    disabled?: boolean;
    outline?: boolean;
    rounded?: boolean;
    small?: boolean;
    icon?: IconType;
    iconName?: string | null;
    iconSize?: number;
    fontColor?: string;
    fontSize?: number;
    shadow?: boolean
}
const CardIcon: React.FC<CardIconProps> = ({
    label,
    description,
    onClick,
    disabled,
    outline,
    rounded,
    small,
    icon: Icon,
    iconName,
    iconSize,
    fontColor,
    fontSize,
    shadow
}) => {
    if(!fontColor){
        fontColor = 'grey'
    }
    if(!fontSize){
        fontSize = 2
    }
    if(!iconName){
        iconName = "loading"
    }
    return (
        <div 
            onClick={() => {}}
            className={`
                flex 
                flex-col
                py-2
                px-4
                text-center
                ${outline ? 'border-[1px]' : 'border-none'}
                ${rounded ? 'rounded-md' : 'rounded-none'}
                mt-2
                ${outline ? `border-${fontColor}-500` : 'border-black'}
                ${shadow ? `shadow` : 'shadow-none'}
                ${shadow ? `hover:shadow-lg` : 'hover:shadow-none'}
                ${shadow ? `hover:bg-${fontColor}-500` : `text-gray-700`}
                transition
                cursor-pointer
            `}
        >

            
            <IconComponent 
                size={iconSize ? iconSize : 36}
                iconName={iconName}   
                class_name="mt-2 mx-auto text-gray-600 hover:text-black transition text-center" 
            
            />
            <Heading size='text-sm font-semibold text-gray-700 transition' title={label} center subtitle={description}/>
      </div>
    )
}

export default CardIcon;
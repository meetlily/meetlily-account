'use client';

import { IconType } from "react-icons";

interface MenuItemProps {
    onClick: () => void;
    label: string;
    inline?: boolean;
    class_name?: string;
    icon?: IconType;
    iconSize?: number;
}
const MenuItem: React.FC<MenuItemProps> = ({
    onClick,
    label,
    inline,
    class_name,
    icon: Icon,
    iconSize
}) => {

    return (
      <div 
        onClick={onClick}
        className={`
          text-sm
          relative
          px-4
          py-4
          hover:bg-neutral-50
          hover:text-orange-500
          transition
          ${Icon ? 'pl-9' : 'pl-4'}
          ${class_name ? class_name : ''}
        `}  
      >
        <div
          className={`
            block
            w-full
            
          `}
        >
          {Icon && (
              <Icon 
                  size={iconSize ? iconSize : 20}
                  className="
                      absolute
                      left-2
                      top-4
                  "
              />
          )}
          {label}
        </div>
        
      </div>
    )
}

export default MenuItem;
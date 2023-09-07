
'use client';
import Heading from "../../Heading";
import IconComponent from "../../icons/IconComponent";
interface AddItemProps {
    title: string;
    onClick?: () => void;
    iconName?: string;
    fontSize?: number;
    iconSize?: number;
    inline: boolean;
}
const AddItem: React.FC<AddItemProps> = ({
    title,
    onClick,
    iconName,
    fontSize,
    iconSize,
    inline
}) => {
    if(!iconName){
        iconName = 'ban'
    }
    return (
        <>
            <div className={`
                flex
                mx-auto
                cursor-pointer
                justify-center
                items-center
                ${inline ? 'flex-row' : 'flex-col'}
            `}>
            <IconComponent 
                size={iconSize ? iconSize : 36}
                iconName={iconName}   
                class_name="mt-2 mx-auto text-gray-600 hover:text-black transition" 
            />
            <Heading size='text-xs font-semibold text-gray-700 transition' title={title} center />
            </div>
        </>
    )
}

export default AddItem;
'use client'

import { useParams, useRouter, useSearchParams } from "next/navigation"
import Heading from "../Heading";
import IconComponent from "../icons/IconComponent";
import { IconType } from "react-icons";
import { Popover, PopoverInterface, PopoverOptions } from "flowbite";
import { useCallback, useState } from "react";
import qs from "query-string";
import ModuleOptions from "./ModuleOptions";
import { Badge } from "flowbite-react";
import AppIcons from "../icons/AppIcons";

interface ModuleBoxProps {
	label: string;
    slug: string;
	description?: string;
    short_desc?: string;
	disabled?: boolean;
	outline?: boolean;
	rounded?: boolean;
	small?: boolean;
	icon?: IconType;
	iconName?: string | null;
	iconSize?: number;
	fontColor?: string;
	fontSize?: number;
	shadow?: boolean;
	contentId?: string | null;
	buttonId?: string | null;
    installed?: boolean;
}

const ModuleBox: React.FC<ModuleBoxProps> = ({
    label,
    slug,
	description,
    short_desc,
	disabled,
	outline,
	rounded,
	small,
	icon: Icon,
	iconName,
	iconSize,
	fontColor,
	fontSize,
	shadow,
	contentId,
	buttonId,
    installed
}) => {

    const router = useRouter()
    const params = useParams()
    const paramQuery = useSearchParams();
	const [isLoading, setIsLoading] = useState(false)
	if (!contentId) {
		contentId = 'popoverContent';
	}
	const $targetEl: HTMLElement = document.getElementById(contentId)!;
	if (!buttonId) {
		buttonId = 'popoverButton';
	}
	const $triggerEl: HTMLElement = document.getElementById(`${buttonId}-help`)!;
	// set the popover content element

	// set the element that triggers the popover using hover or click

	// options with default values
	const options: PopoverOptions = {
		placement: 'top',
		triggerType: 'hover',
		offset: 5,
		onHide: () => {
			//console.log('popover is shown');
		},
		onShow: () => {
			//console.log('popover is hidden');
		},
		onToggle: () => {
			//console.log('popover is toggled');
		}
	};

	if ($targetEl) {
		/*
		 * targetEl: required
		 * triggerEl: required
		 * options: optional
		 */
		const popover: PopoverInterface = new Popover($targetEl, $triggerEl, options);

		//popover.show();
	}
	if (!fontColor) {
		fontColor = 'grey';
	}
	if (!fontSize) {
		fontSize = 2;
	}
	if (!iconName) {
		iconName = 'loading';
	}
    const handleClickView = useCallback(() => {
        let currentModule = {};
        console.log(params)
        if (params) {
            currentModule = qs.parse(params.toString());
        }

        const updatedQuery: any = {
           ...currentModule,
           category: label
        }


   }, [])
    return (
        <>
			
			
			<div
				id={buttonId}
				className={`
                relative
                flex 
                flex-col
				items-center
                justify-center
                w-full
                py-0
                px-0
                text-center
                ${outline ? 'border-[1px]' : 'border-none'}
                ${rounded ? 'rounded-md' : 'rounded-none'}
                mt-2
                ${outline ? `border-${fontColor}-500` : 'border-black'}
                ${shadow ? `shadow` : 'shadow-none'}
                ${shadow ? `hover:shadow-lg` : 'hover:shadow-none'}
                ${shadow ? `hover:bg-${fontColor}-500` : `text-gray-700`}
                transition
            `}
			>   
            {installed && (
                <div className="absolute top-1 left-1">
                    <IconComponent iconName="checked" size={24} class_name="text-cyan-500"/>
                </div>
            )}
                
                <div id={`${buttonId}-help`} className="absolute top-1 right-1">
                    <IconComponent iconName="infoCircle" size={18} class_name="text-gray-500 cursor-pointer"/>
                </div>
                <div 
                    onClick={handleClickView}
                    className="
                        flex 
                        flex-col 
                        items-center 
                        justify-center 
                        p-2 
                        text-gray-600 
                        cursor-pointer 
                        hover:text-cyan-500
                    ">
                    <div className="flex flex-col items-end mx-auto justify-center">
                    <IconComponent
                        size={iconSize ? iconSize : 36}
                        iconName={iconName}
                        class_name={`px-2 py-2  mt-2 w-full transition md:text-sm`}
                    />
                    </div>
                    <div className="flex flex-col items-center mt-2">
                        <div className="text-sm md:text-md font-semibold">{label}</div>
                        <div className="block text-xs font-light px-2 h-4 overflow-hidden whitespace-no-wrap text-ellipsis max-w-[180px]">{short_desc}</div>
                    </div>
                </div>
                <div  className={`flex flex-col items-center px-2 border-0 border-t-2 w-full mt-3 rounded-none bg-gray-50 `} role="group">
                    <ModuleOptions  installed={installed}/>
                </div>
                
			</div>
			<div
				data-popover
				id={contentId}
				role="tooltip"
				className="absolute z-10 invisible inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800"
			>
				<div className="relative px-3 py-2 bg-gray-500 border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-gray-700">
					<div className="absolute left-2 top-2">
						<IconComponent iconName={iconName} size={20} class_name="text-gray-50"/>
					</div>
					<h2 className="leading-3 inline-flex font-semibold text-gray-50 text-md dark:text-white ml-5"> {label} 
                    {installed && (
                        <>
                            <Badge color="cyan" icon={AppIcons['check']} className="absolute top-2 right-2 py-0 border border-cyan-400 ">
                                <div 
                                    className="
                                        px-2
                                        inline-flex 
                                        items-center 
                                        justify-center 
                                        text-xs 
                                        text-cyan-400
                                        dark:border-gray-900"
                                    >installed</div>
                            </Badge>
                        </>
                    )}
                    
                    </h2>
				</div>
				<div className="px-3 py-2">
					<p>{description}</p>
				</div>
                <hr />
                <ModuleOptions installed={installed}/>
				<div data-popper-arrow></div>
			</div>
		</>
    )
}

export default ModuleBox;
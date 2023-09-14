'use client';

import { Button } from "flowbite-react";
import IconComponent from "../icons/IconComponent";
interface ModuleOptionsProps {
	label?: string;
    slug?: string;
    installed?: boolean;
}

const ModuleOptions: React.FC<ModuleOptionsProps> = ({
    label,
    slug,
	installed
}) => {

	return (
		<div className="inline-flex" role="group">

                <div
                    className="
                        inline-flex 
                        text-xs 
                        border-0 
                        bg-transparent 
                        items-center 
                        justify-center
                        px-4 
                        py-2
                        md:px-2 
                        w-full
                        font-medium 
                        cursor-pointer
                        text-gray-900 
                        hover:text-cyan-500 
                        focus:z-10 
                        focus:ring-2 
                        text-center
                        focus:ring-cyan-500 
                        focus:text-cyan-700 
                        dark:bg-gray-700 
                        dark:border-gray-600 
                        dark:text-white 
                        dark:hover:text-white 
                        dark:hover:bg-gray-600 
                        dark:focus:ring-blue-500 
                        dark:focus:text-white
                        disabled
                        "
                >
                    <IconComponent iconName={`${installed ? 'uninstall' : 'install'}`} size={16}/>
                    {!installed ? (
                        <span className="ml-1 inline-flex">install</span>
                    ): (
                        <span className="ml-1 inline-flex">uninstall</span>
                    )}
                </div>
            
                
            
            
			
            <div
				className="
                    inline-flex 
                    text-xs 
                    border-0 
                    bg-transparent 
                    items-center 
                    justify-center
                    px-4 
                    py-2
                    md:px-2 
                    w-full
                    font-medium 
                    cursor-pointer
                    text-gray-900 
                    hover:text-cyan-500 
                    focus:z-10 
                    focus:ring-2 
                    text-center
                    focus:ring-cyan-500 
                    focus:text-cyan-700 
                    dark:bg-gray-700 
                    dark:border-gray-600 
                    dark:text-white 
                    dark:hover:text-white 
                    dark:hover:bg-gray-600 
                    dark:focus:ring-blue-500 
                    dark:focus:text-white"
			>
				<IconComponent iconName="cog" size={16}/>
				<span className="ml-1 inline-flex">manage</span>
			</div>
            
			
		</div>
	);
};

export default ModuleOptions;

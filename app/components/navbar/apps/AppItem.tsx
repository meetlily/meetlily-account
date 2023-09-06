'use client'
import IconComponent from "../../icons/IconComponent";
import Image from "next/image";
const AppItem = () => {
    return (
        <>
            <div className="flex-shrink-0">
                <Image src="/images/placeholder.jpg" width={60} height={60} alt="Eddie Villanueva"/>
                
                <div className="flex absolute justify-center items-center ml-6 -mt-5 w-5 h-5 rounded-full border border-white bg-primary-700 dark:border-gray-700">
                    <IconComponent size={12} iconName={"email"} class_name="text-white"/>
                </div>
            </div>
            <div className="pl-3 w-full">
                <div className="text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400">
                    New message from 
                    <span className="font-semibold text-gray-900 dark:text-white">Marionette</span>Hey, whats up? All set for the presentation?
                </div>
                <div className="text-xs font-medium text-primary-600 dark:text-primary-500">
                    a few moments ago
                </div>
            </div>
        </>
    )
}

export default AppItem;
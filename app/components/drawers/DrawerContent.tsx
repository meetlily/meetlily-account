'use client';


import { Button, Select } from 'flowbite-react';
import IconComponent from '../icons/IconComponent';

interface DrawerProp {
    drawerId: string;
    drawerLabelId: string;
    headerTitle: string;
    drawerContent: React.ReactNode;
    isOpen?: boolean;
    overlay?: boolean;
    primaryAction?: () => void;
    classNames?: string;
}

const DrawerContent: React.FC<DrawerProp> = ({
    drawerId,
    drawerLabelId,
    headerTitle,
    drawerContent,
    isOpen,
    overlay,
    primaryAction,
    classNames
}) => {
    if(!classNames){
        classNames = ""
    }
    return (
        <>
            <div id={drawerId} className={`fixed top-0 left-0 z-40 w-full h-screen max-w-xs p-4 overflow-y-auto transition-transform -translate-x-full bg-white dark:bg-gray-800 ${classNames}`} aria-labelledby={drawerLabelId} aria-hidden="true">
                <h5 id={drawerLabelId} className="inline-flex items-center mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-gray-400">New Product</h5>
                <Button type="button" data-drawer-dismiss={drawerId} aria-controls={drawerId} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
                    <IconComponent iconName="close" />
                    <span className="sr-only">Close menu</span>
                </Button>
                {drawerContent}
            </div>
        </>
    )
}

export default DrawerContent;
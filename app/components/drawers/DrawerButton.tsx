'use client'

import { Button } from "flowbite-react";
import IconComponent from "../icons/IconComponent";
import AppIcons from "../icons/AppIcons";

interface DrawerButtonProp {
    buttonId?: string;
    drawerTargetId?: string;
    label: string;
    iconName?: string | 'ban' | undefined;
    primaryAction?: () => void;
    classNames?: string;
    iconOnly?: boolean;
}

const DrawerButton: React.FC<DrawerButtonProp> = ({
    buttonId,
    drawerTargetId,
    label,
    iconName,
    primaryAction,
    classNames,
    iconOnly
}) => {
    if(!classNames) {
        classNames = "bg-gray-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800";
    }
    if(!iconName){
        iconName = 'ban';
    }
    return (
        <div className="text-center m-5">
            <Button color={"dark"} id={buttonId} className={classNames} data-drawer-target={drawerTargetId} data-drawer-show={drawerTargetId} aria-controls={drawerTargetId}>
            <IconComponent iconName={iconName} />
            {!iconOnly && (
                <p className="ml-2">{label}</p>
            )}
            </Button>
        </div>
    )
}

export default DrawerButton
'use client';
import { useState, useEffect } from "react";
import { IconType } from "react-icons";
import axios, { AxiosResponse } from "axios";
import toast from "react-hot-toast";
import Icons from "./Icons";
import AppIcons from "./AppIcons";
import { FaBan } from "react-icons/fa6";

interface IconComponentProps {
    iconName?: string;
    size?: number;
    class_name?: string;
    color?: string;
    customIcon?: IconType | null;
}

const IconComponent: React.FC<IconComponentProps> =  ({
    iconName,
    size,
    class_name,
    color,
    customIcon: CustomIcon
}) => {
    
    
    if (!iconName) {
        iconName = "ban";
    }

    const Icon = AppIcons[iconName];

    if (!size) {
        size = 18;
    }
    if (!class_name) {
        class_name = "block mx-auto";
    }
  return (
        <>
            {Icon && !CustomIcon && (
                <div className={class_name}>
                    <Icon size={size} color={color} />
                </div>
            )}
            {CustomIcon && (
                <div className={class_name}>
                    <CustomIcon size={size} color={color} />
                </div>
            )}
            {!Icon && (
                <div className="text-neutral-400 text-center block mx-auto">
                    <FaBan size={size} />
                </div>
            )}
        </>
    );
}

export default IconComponent;